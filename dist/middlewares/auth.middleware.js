"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthMiddleware {
    constructor(secretKey) {
        this.secretKey = secretKey;
    }
    execute(req, res, next) {
        if (req.headers.authorization) {
            (0, jsonwebtoken_1.verify)(req.headers.authorization.split(' ')[1], this.secretKey, (err, payload) => {
                if (err) {
                    next();
                }
                else if (payload) {
                    req.user = payload;
                    next();
                }
            });
        }
        next();
    }
    ;
}
exports.AuthMiddleware = AuthMiddleware;
