import { Router } from "express";
import { OrderController } from "./order.contoller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const orderRouter = Router()
const contoller = new OrderController()

orderRouter.use('/order', authMiddleware)
orderRouter.get('/order', contoller.getOrderCurrentUser)
orderRouter.get('/order/:id', contoller.getOneOrder)
orderRouter.post('/order', contoller.createNewOrder)

export { orderRouter }