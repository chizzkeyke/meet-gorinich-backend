import { StockModel } from './stock.model';
import { Request, Response } from "express";

export class StockController {
    async getAllSocks(req: Request, res: Response) {
        try {
            const stocks = await StockModel.find()

            return res.status(200).json({
                data: stocks
            })
        } catch (error) {
            return res.status(400).json({
                message: error
            })
        }
    }

    async getOneStock(req: Request, res: Response) {
        try {
            const {id} = req.params

            const stock = await StockModel.findById(id)

            return res.status(200).json({
                data: stock
            })
        } catch (error) {
            return res.status(400).json({
                message: error
            })
        }
    }



    async createNewStock(req: Request, res: Response) {
        try {
            const paramsNewStock = req.body

            const newStock = await StockModel.create({ ...paramsNewStock })

            return res.status(200).json({
                data: newStock
            })
        } catch (error) {
            return res.status(400).json({
                message: error
            })
        }
    }

    async deleteStock(req: Request, res: Response) {
        try {
            const { id } = req.params

            await StockModel.findByIdAndDelete(id)

            return res.status(200).json({
                message: "Success deleted stock",
                data: id
            })
        } catch (error) {
            return res.status(400).json({
                message: error
            })
        }
    }
}