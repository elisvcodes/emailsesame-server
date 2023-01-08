"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const hashPassword = (password) => {
    const hashedPassword = bcrypt_1.default.hash(password, 5);
    return hashedPassword;
};
exports.default = hashPassword;
//# sourceMappingURL=hashPassword.js.map