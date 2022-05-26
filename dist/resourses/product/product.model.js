"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelProduct = void 0;
const mongoose_1 = require("mongoose");
const schemaProduct = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    count: { type: Number, required: true },
    price: { type: Number, required: true }
});
exports.modelProduct = (0, mongoose_1.model)("Product", schemaProduct);
