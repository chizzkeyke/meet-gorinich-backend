import { model, Schema } from 'mongoose'
import { ReviewI } from './review.interface'

const ReviewSchema = new Schema<ReviewI>({
    author: {type: String, required: true},
    comment: {type: String, required: true},
    date: {type: String, required: true},
    rate: {type: Number, required: true}
})

export const ReviewModel = model("Rewiew", ReviewSchema)