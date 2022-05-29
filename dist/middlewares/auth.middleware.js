"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function authMiddleware(req, res, next) {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            message: 'Token is not found'
        });
    }
    try {
        (0, jsonwebtoken_1.verify)(token, 'gorinich');
        next();
    }
    catch (error) {
        return res.status(403).json({
            error: 'User not verificated.'
        });
    }
}
exports.authMiddleware = authMiddleware;
