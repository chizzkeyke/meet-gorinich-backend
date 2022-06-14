import { SliderI } from './slider.interface';
import { model, Schema } from 'mongoose';

const SliderSchema = new Schema<SliderI>({
    image: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    type: { type: Number, required: true }
})

export const SliderModel = model('slider', SliderSchema)