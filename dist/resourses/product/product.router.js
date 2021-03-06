"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerProduct = void 0;
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const controller = new product_controller_1.ProductController();
const routerProduct = (0, express_1.Router)();
exports.routerProduct = routerProduct;
routerProduct.get('/product', controller.getProduct);
routerProduct.use('/product', auth_middleware_1.authMiddleware);
routerProduct.post('/product/create', controller.createProduct);
routerProduct.patch('/product/:nameProduct/price', controller.updatePriceProduct);
routerProduct.patch('/product/:nameProduct/count', controller.updateCountProduct);
