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
exports.ProductService = void 0;
const product_model_1 = require("./product.model");
class ProductService {
    getProduct(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield product_model_1.modelProduct.findOne({ name });
            return product;
        });
    }
    createProduct(name, description, count) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProduct = yield product_model_1.modelProduct.create({
                name, description, count
            });
            yield newProduct.save();
            return newProduct;
        });
    }
}
exports.ProductService = ProductService;
