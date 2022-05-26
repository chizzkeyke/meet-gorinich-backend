import { Router } from "express";
import { ProductController } from "./product.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const controller = new ProductController()
const routerProduct = Router()

routerProduct.get('/product', controller.getProduct)

routerProduct.use('/product', authMiddleware)
routerProduct.post('/product', controller.createProduct)

export { routerProduct }