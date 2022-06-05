import { OrderI } from './order.interface';
import { Request, Response } from 'express';
import { OrderModel } from "./order.model";

export class OrderController {
    async getOrder(req: Request, res: Response) {
        try {
            const {id} = req.params
            await OrderModel.findById(id, (err: Error, order: OrderI) => {
                if (!!err) return res.status(400).json({
                    message: `Ошибка в поиске заказа под номером ${id}`
                })

                return res.status(200).json({
                    data: order
                })
            })
            
        } catch (error) {
            return res.status(400).json({
                message: 'Ошибка в полуении данных о заказе.'
            })
        }
    }

    async getOrders(res: Response) {
        try {
            await OrderModel.find((err, payload) => {
                if (!!err) return res.status(400).json({
                    message: 'Ошибка в получении данных по заказах.'
                })

                return res.status(200).json({
                    data: payload.reverse()
                })
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Ошибка в получении данных по заказах.'
            })
        }
    }

    async createNewOrder(req: Request, res: Response) {
        try {
            const optionsForNewOrder = req.body
            await OrderModel.create(optionsForNewOrder, (err: Error, newOrder: OrderI) => {
                if (!!err) return res.status(400).json({
                    message: 'Ошибка при создании нового заказа.'
                })

                return res.status(200).json({
                    data: newOrder
                })
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Ошибка при создании нового заказа.'
            })
        }
    }

    async deleteOrder(req: Request, res: Response) {
        try {
            const {id} = req.body 
            await OrderModel.findById(id, (err: Error) => {
                if (err) return res.status(400).json({
                    message: `Возникла ошибка при удаленни закза: ${id}.`
                })

                return res.status(203).json({
                    message: 'Заказ удалён успешно.'
                })
            })

        } catch (error) {

        }
    }
}