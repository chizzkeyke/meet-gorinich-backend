import { OrderModel } from './order.model';
import { modelUser } from './../user/user.model';
import { Request, Response } from "express";

export class OrderController {
    async getOrderCurrentUser(req: Request, res: Response) {
        try {
            const token = req.headers.authorization?.split(' ')[1]

            if (!token) throw 'Token not found.'
            const findedUser = await modelUser.findOne({ token })

            if (!findedUser) throw 'User is not a find.'

            if (findedUser.role === 'admin') {
                let allOrders = await (await OrderModel.find()).reverse()

                return res.status(201).json({
                    data: allOrders
                })
            }
            const findedOrders = await OrderModel.find({ email: findedUser.email })

            return res.status(201).json({
                data: findedOrders
            })
        } catch (error) {
            return res.status(400).json({
                message: error
            })
        }
    }

    async createNewOrder(req: Request, res: Response) {
        try {
            const dataNewOrder = req.body

            const newOrder = await OrderModel.create({...dataNewOrder})

            return res.status(201).json({
                data: newOrder
            })
        } catch (error) {
            return res.status(400).json({
                message: error
            })
        }
    }

    async getOneOrder(req: Request, res: Response) {
        try {
            const id = req.params

            const findedOrder = await OrderModel.findById(id)
            return res.status(200).json({
                data: findedOrder
            })
        } catch (error) {
            return res.status(400).json({
                message: error
            })
        }
    }
}