import {Schema, model} from 'mongoose';
import { ProductI } from './product.interface';

const ProductSchema = new Schema<ProductI>({
    title: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    count: {type: Number, required: true},
    price: {type: Number, required: true},
    imageProduct: {type: String, required: true, unique: true}
})

export const ProductModel = model('Product', ProductSchema)