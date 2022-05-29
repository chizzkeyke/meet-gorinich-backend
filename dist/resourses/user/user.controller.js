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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_model_1 = require("./user.model");
const user_service_1 = require("./user.service");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userService = new user_service_1.UserService();
const salt = bcrypt_1.default.genSaltSync(5);
class UserController {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password, phone, corporate } = req.body;
                const checkEmail = yield user_model_1.modelUser.findOne({ email });
                if (!!checkEmail) {
                    throw 'Пользователь с таким Email уже есть';
                }
                const role = userService.assignRole(email);
                const hashedPassword = bcrypt_1.default.hashSync(password, salt);
                const token = yield userService.signJWT(email, 'gorinich');
                const newUser = yield user_model_1.modelUser.create({
                    email,
                    password: hashedPassword,
                    phoneNumber: phone,
                    token,
                    role,
                    corporate
                });
                yield newUser.save();
                return res.status(201).json({
                    token,
                    message: 'User was created.'
                });
            }
            catch (error) {
                res.status(500).json({
                    message: error
                });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const user = yield user_model_1.modelUser.findOne({ email });
                if (!user) {
                    return res.status(400).json({
                        message: 'User with this email not a find.'
                    });
                }
                const validPassword = bcrypt_1.default.compareSync(password, user.password);
                if (!validPassword) {
                    return res.status(400).json({
                        message: 'Wrong a password.'
                    });
                }
                return res.status(200).json({
                    token: user.token
                });
            }
            catch (e) {
                res.status(500).json({
                    message: e
                });
            }
        });
    }
    getUserInfo(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
                const userData = yield user_model_1.modelUser.findOne({ token });
                if (!userData) {
                    throw 'User is not found.';
                }
                const { email, phoneNumber, firstName, middleName, lastName, infoAboutCompany, corporate } = userData;
                return res.status(200).json({
                    email,
                    phoneNumber,
                    firstName,
                    middleName,
                    lastName,
                    infoAboutCompany,
                    corporate
                });
            }
            catch (error) {
                return res.status(400).json({
                    error
                });
            }
        });
    }
    updateUserInfo(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = __rest(req.body, []);
                const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
                if (!token) {
                    throw 'Token is not found.';
                }
                const updatedDataUser = yield user_model_1.modelUser.findOneAndUpdate({ token }, Object.assign({}, data), { new: true });
                return res.status(200).json(updatedDataUser);
            }
            catch (error) {
                return res.status(400).json({
                    error
                });
            }
        });
    }
}
exports.UserController = UserController;
