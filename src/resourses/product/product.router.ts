import { Router } from "express";
import { ProductController } from "./product.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const controller = new ProductController()
const productRouter = Router()

productRouter.get('/product', controller.getProducts)
productRouter.get('/product/:id', controller.getProduct)

productRouter.use('/product', authMiddleware)
productRouter.post('/product', controller.createProduct)
productRouter.patch('/product/:nameProduct/price', controller.updatePriceProduct)
productRouter.patch('/product/:nameProduct/count', controller.updateCountProduct)
productRouter.delete('/product/:id', controller.deleteProduct)

export { productRouter }