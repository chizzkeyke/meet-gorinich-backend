import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { routerProduct } from './resourses/product/product.router'
import { userRouter } from './resourses/user/user.router';
import { orderRouter } from './resourses/order/order.router';

const app = express()
const PORT = 8000
const mongoDBURL = 'mongodb://localhost:27017/Meat'

app.use(cors())
app.use(express.json())
app.use('/api', routerProduct)
app.use('/api', userRouter)
app.use('/api', orderRouter)

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