import { Schema, model } from 'mongoose';
import { StockI } from './stock.interface';

const StockSchema = new Schema<StockI>({
    title: {type: String, required: true},
    content: {type: String, required: true},
    image: {type: String}
})

export const StockModel = model('Stock', StockSchema)