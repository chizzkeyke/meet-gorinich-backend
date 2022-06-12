import { ReviewModel } from './review.model';
import { Request, Response } from "express";

export class ReviewContoller {
    async addReview(req: Request, res: Response) {
        try {
            const dataNewReview = req.body

            const newReview = await ReviewModel.create({ ...dataNewReview })

            return res.status(200).json({
                message: 'Новый отзыв создан.',
                data: newReview
            })
        } catch (error) {
            return res.status(401).json({
                message: 'Ошибка в создании нового отзыва.'
            })
        }
    }

    async getReviews(req: Request, res: Response) {
        try {
            const reviews = await ReviewModel.find()

            return res.status(200).json({
                data: reviews
            })
        } catch (error) {
            return res.status(401).json({
                message: 'Ошибка в получении отзывов.'
            })
        }
    }

    async getReview(req: Request, res: Response) {
        try {
            const { id } = req.params

            const review = await ReviewModel.findById(id)

            return res.status(200).json({
                data: review
            })
        } catch (error) {
            return res.status(401).json({
                message: 'Ошибка в получении отзыва.'
            })
        }
    }

    async deleteReview(req: Request, res: Response) {
        try {
            const { id } = req.params

            await ReviewModel.findByIdAndRemove(id)

            return res.status(200).json({
                message: "Review success delete."
            })
        } catch (error) {
            return res.status(401).json({
                message: 'Ошибка в получении отзыва.'
            })
        }
    }
}