import { model, Schema } from 'mongoose'
import { ProductI } from './product.interface'

const schemaProduct = new Schema<ProductI>({
    name: {type: String, required: true},
    description: {type: String, required: true},
    count: {type: Number, required: true},
    price: {type: Number, required: true}
})

export const modelProduct = model("Product", schemaProduct)