import express from "express";
import findUser from "../Controllers/users/findUser.controller";
import createUser from "../Controllers/users/createUser.controller";
const users = express.Router();

users.post("/create", createUser);
users.post("/login", findUser);
export default users;
