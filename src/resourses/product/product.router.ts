import { Router } from "express";
import { ProductController } from "./product.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const controller = new ProductController()
const routerProduct = Router()


routerProduct.get('/product', controller.getProducts)
routerProduct.get('/product/:id', controller.getProduct)

routerProduct.use('/product', authMiddleware)
routerProduct.post('/product/create', controller.createProduct)
routerProduct.patch('/product/:nameProduct/price', controller.updatePriceProduct)
routerProduct.patch('/product/:nameProduct/count', controller.updateCountProduct)
routerProduct.delete('/prodcut/:nameProduct/delete')

export { routerProduct }