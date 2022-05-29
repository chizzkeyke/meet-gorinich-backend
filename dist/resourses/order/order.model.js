"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    price: { type: Number, required: true },
    products: [],
    client: { type: String, required: true },
    phoneNumberClient: { type: Number, required: true },
    comment: { type: String, required: true },
});
exports.OrderModel = (0, mongoose_1.model)("Order", OrderSchema);
