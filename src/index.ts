import express from "express";
import dotenv from "dotenv";
import users from "./Routes/users.route";
import contacts from "./Routes/contacts.route";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Users route
app.use("/api/v1/users", users);

// Contacts route
app.use("/api/v1/contacts", contacts);

app.listen(8000);
