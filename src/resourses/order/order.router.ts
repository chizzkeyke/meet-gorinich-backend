import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";

const orderRouter = Router()
orderRouter.use(authMiddleware)


