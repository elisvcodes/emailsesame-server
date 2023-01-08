"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const findUser_controller_1 = __importDefault(require("../Controllers/users/findUser.controller"));
const createUser_controller_1 = __importDefault(require("../Controllers/users/createUser.controller"));
const users = express_1.default.Router();
users.post("/create", createUser_controller_1.default);
users.post("/login", findUser_controller_1.default);
exports.default = users;
//# sourceMappingURL=users.route.js.map