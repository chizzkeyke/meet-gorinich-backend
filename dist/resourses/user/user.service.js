"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const user_model_1 = require("./user.model");
class UserService {
    checkedUser(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield user_model_1.modelUser.findOne({ email }, (err, user) => {
                if (err)
                    return;
                return user;
            });
        });
    }
    assignRole(email) {
        if (email === 'egor228@mail.ru')
            return 'admin';
        return 'buyer';
    }
    createUser(email, password, phone) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkedUser(email);
            const newUser = yield user_model_1.modelUser.create({
                email,
                password,
                phoneNumber: phone
            });
            yield newUser.save();
            return newUser;
        });
    }
    signJWT(email, secret) {
        return new Promise((resolve, reject) => {
            (0, jsonwebtoken_1.sign)({
                email,
                iat: Math.floor(Date.now() / 1000),
            }, secret, {
                algorithm: "HS256",
            }, (err, token) => {
                if (err) {
                    reject(err);
                }
                resolve(token);
            });
        });
    }
}
exports.UserService = UserService;
