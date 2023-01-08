import express from "express";
import dotenv from "dotenv";
import users from "./Routes/users.route";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Users route
app.use("/api/v1/users", users);

app.listen(3000, () => {
  console.log("server runing");
});
