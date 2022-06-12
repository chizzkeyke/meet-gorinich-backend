import { Schema, model } from 'mongoose';
import { OrderI } from "./order.interface";

const OrderSchema = new Schema<OrderI>({
   price: { type: Number, required: true },
   products: Schema.Types.Array,
   client: { type: String, required: true },
   phoneNumberClient: { type: Number, required: true },
   comment: { type: String, required: false },
   email: { type: String, required: true },
   typeDelivery: { type: String, required: true },
   address: { type: String },
   date: {type: String, required: true}
})

export const OrderModel = model("Order", OrderSchema)