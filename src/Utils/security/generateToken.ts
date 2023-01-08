import { Prisma } from "@prisma/client";
import jwt from "jsonwebtoken";

type User = Prisma.UserGetPayload<{ select: { id: true; email: true } }>;

const generateToken = (user: User) => {
  return jwt.sign({ id: user.id, email: user.email }, "chips");
};

export default generateToken;
