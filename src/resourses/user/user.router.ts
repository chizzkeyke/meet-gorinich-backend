import { Router } from "express";
import { UserController } from "./user.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const userRouter = Router()
const controller = new UserController()

userRouter.post('/register', controller.register)
userRouter.post('/login', controller.login)

userRouter.use('/user', authMiddleware)
userRouter.get('/user', controller.getUserInfo)
userRouter.put('/user', controller.updateUserInfo)
userRouter.delete('/user')

export { userRouter }