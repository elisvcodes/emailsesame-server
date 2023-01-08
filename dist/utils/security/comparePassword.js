"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const comparePassword = (providedPassword, hashedPassword) => {
    return bcrypt_1.default.compare(providedPassword, hashedPassword);
};
exports.default = comparePassword;
//# sourceMappingURL=comparePassword.js.map