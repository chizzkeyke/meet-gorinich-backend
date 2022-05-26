"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelUser = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    firstName: { type: String, required: false },
    middleName: { type: String, required: false },
    lastName: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    token: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    corporate: { type: String, required: true },
    phoneNumber: { type: Number, required: true, unique: true },
    infoAboutCompany: {
        INN: { type: String, required: false },
        KPP: { type: String, required: false },
        nameCompany: { type: String, required: false },
    }
});
exports.modelUser = (0, mongoose_1.model)('User', UserSchema);
