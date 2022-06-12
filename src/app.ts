import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { productRouter } from './resourses/product/product.router'
import { userRouter } from './resourses/user/user.router';
import { orderRouter } from './resourses/order/order.router';
import { stockRouter } from './resourses/stock/stock.router';
import { reviewRouter } from './resourses/review/review.router';

const app = express()
const PORT = 8000
const mongoDBURL = 'mongodb://localhost:27017/Meat'

app.use(cors())
app.use(express.json())
app.use('/api', productRouter)
app.use('/api', userRouter)
app.use('/api', orderRouter)
app.use('/api', stockRouter)
app.use('/api', reviewRouter)

export async function bootstrap(){
    try {
        mongoose.connect(mongoDBURL)
        mongoose.connection
        .once('open', () => console.log("We are connected"))
        .on('error', (err) => console.warn("error", err))
        await app.listen(PORT, () => {
            console.log('Server start work on port '+ PORT);
        })
    } catch (err) {
        console.warn(err);
    }
}