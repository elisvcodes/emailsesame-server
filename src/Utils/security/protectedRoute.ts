import { Prisma } from ".prisma/client";
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export interface RequestWithUserRole extends Request {
  user?:
    | Prisma.UserGetPayload<{
        select: {
          id: true;
          email: true;
        };
      }>
    | string
    | JwtPayload;
}

const protectedRoute = (
  req: RequestWithUserRole,
  res: Response,
  next: NextFunction
) => {
  const Bearer = req.headers.authorization;
  if (!Bearer) {
    throw "You are not authroized";
  }
  const token = Bearer?.replace("Bearer ", "");

  const user = jwt.verify(token, "chips");

  if (!user) throw "No such user was found.";

  req.user = user;

  next();
};

export default protectedRoute;
