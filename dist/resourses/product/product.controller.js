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
exports.ProductController = void 0;
const product_sercive_1 = require("./product.sercive");
const product_model_1 = require("./product.model");
const service = new product_sercive_1.ProductService();
class ProductController {
    getProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(200).json({ message: req.params.nameProduct });
            }
            catch (err) {
                res.status(400).json({ error: err });
            }
        });
    }
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, description, count } = req.body;
            try {
                yield service.createProduct(name, description, count);
                return res.status(201).json({ message: 'New product create' });
            }
            catch (err) {
                res.status(400).json({ error: err });
            }
        });
    }
    updatePriceProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nameProduct } = req.params;
                const { newPrice } = req.body;
                yield product_model_1.modelProduct.findOneAndUpdate({ name: nameProduct }, { price: newPrice }, { new: true });
                return res.status(201);
            }
            catch (err) {
                return res.status(400).json({
                    message: "Can't update price choosing product."
                });
            }
        });
    }
    updateCountProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nameProduct } = req.params;
                const { newCount } = req.body;
                yield product_model_1.modelProduct.findOneAndUpdate({ name: nameProduct }, { count: newCount }, { new: true });
                return res.status(201);
            }
            catch (err) {
                return res.status(400).json({
                    message: "Can't update count choosing product."
                });
            }
        });
    }
}
exports.ProductController = ProductController;
