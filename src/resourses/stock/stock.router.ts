import { Router } from "express";
import { StockController } from "./stock.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const controller = new StockController()
const stockRouter = Router()

stockRouter.get('/stock', controller.getAllSocks)
stockRouter.get('/stock/:id', controller.getOneStock)
stockRouter.use('/stock', authMiddleware)
stockRouter.post('/stock', controller.createNewStock)
stockRouter.delete('/stock/:id', controller.deleteStock)

export { stockRouter }