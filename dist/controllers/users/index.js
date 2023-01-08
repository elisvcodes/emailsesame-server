"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const express_1 = __importDefault(require("express"));
const createUser_1 = require("./createUser");
const router = express_1.default.Router();
exports.Users = router;
router.use("/create", createUser_1.createUser);
//# sourceMappingURL=index.js.map