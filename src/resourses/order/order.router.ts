import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { OrderController } from "./order.contoller";

const controller = new OrderController()

const orderRouter = Router()

orderRouter.use(authMiddleware)
orderRouter.get('order', controller.getOrders)
orderRouter.get('order/:id', controller.getOrder)
orderRouter.post('order/create', controller.createNewOrder)
orderRouter.delete('order', controller.deleteOrder)

export {orderRouter}