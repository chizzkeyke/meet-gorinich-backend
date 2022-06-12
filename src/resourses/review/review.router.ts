import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { ReviewContoller } from "./review.contoller";

const controller = new ReviewContoller()
const reviewRouter = Router()

reviewRouter.get('/review', controller.getReviews)
reviewRouter.get('/review/:id', controller.getReview)

reviewRouter.use('/review', authMiddleware)
reviewRouter.post('/review', controller.addReview)
reviewRouter.delete('/review/:id', controller.deleteReview)

export {reviewRouter}