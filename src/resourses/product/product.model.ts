import { model, Schema } from 'mongoose'
import { ProductI } from './product.interface'

const schemaProduct = new Schema<ProductI>({
    description: {type: String, required: true},
    count: {type: Number, required: true},
    title: {type: String, required: true},
    price: {type: Number, required: true}
})

export const ProductModel = model("Product", schemaProduct)