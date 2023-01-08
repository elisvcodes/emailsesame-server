import express, { Request } from "express";
import protectedRoute, {
  RequestWithUserRole,
} from "../Utils/security/protectedRoute";

const contacts = express.Router();

contacts.post(
  "/create",
  protectedRoute,
  (req: RequestWithUserRole, res: Request) => {
    console.log(req.user);
  }
);

export default contacts;
