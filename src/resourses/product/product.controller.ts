import { ProductI } from './product.interface';
import { Request, Response } from 'express';
import { modelProduct } from './product.model';

export class ProductController {
    async getProducts(res: Response) {
        try {
            await modelProduct.find((err, payload) => {
                if (!!err) {
                    return res.status(400).json({
                        messsage: err
                    })
                }

                return res.status(200).json({
                    data: payload
                })
            })
        } catch (err) {
            return res.status(400).json({
                message: 'Ошибка в получении продуктов.'
            })
        }
    }

    async getProduct(req: Request, res: Response) {
        try {
            const { nameProduct } = req.params

            if (!!nameProduct) return res.status(400).json({ message: 'Параметр не найден.' })

            await modelProduct.findOne({ name: nameProduct }, (err: Error, product: ProductI) => {
                if (!!err) throw res.status(400).json({
                    message: ''
                })

            })

            return res.status(200).json({ message: req.params.nameProduct })
        } catch (err) {
            res.status(400).json({ error: err })
        }
    }

    async createProduct(req: Request, res: Response) {
        try {
            const { name, description, count } = req.body

            const newProduct = await modelProduct.create({name, description, count})
            return res.status(201).json({ message: 'New product create', data: newProduct })
        } catch (err) {
            res.status(400).json({ error: err })
        }
    }

    async updatePriceProduct(req: Request, res: Response) {
        const { nameProduct } = req.params
        const { newPrice } = req.body
        try {
            const updatedPriceProduct = await modelProduct.findOneAndUpdate({ name: nameProduct }, { price: newPrice }, { new: true })

            return res.status(201).json({
                message: `Цена продукта ${updatedPriceProduct?.name} обновлена: ${updatedPriceProduct?.price}.`,
                data: updatedPriceProduct
            })
        } catch (err) {
            return res.status(400).json({
                message: `Цена продукта: ${nameProduct} не обновлена.`
            })
        }
    }

    async updateCountProduct(req: Request, res: Response) {
        try {
            const { nameProduct } = req.params
            const { newCount } = req.body
            await modelProduct.findOneAndUpdate({ name: nameProduct }, { count: newCount }, { new: true })

            return res.status(201)
        } catch (err) {
            return res.status(400).json({
                message: "Can't update count choosing product."
            })
        }
    }

    async deleteProduct(req: Request, res: Response) {
        try {
            const { nameProdcut } = req.params
            if (!!nameProdcut) throw 'Передайте параметр'

            const deletedProduct = await modelProduct.findOneAndDelete({ name: nameProdcut })

            return res.status(201).json({
                message: `Продукт ${deletedProduct?.name} был удалён.`
            })
        } catch (err) {
            return res.status(400).json({
                err
            })
        }
    }
}