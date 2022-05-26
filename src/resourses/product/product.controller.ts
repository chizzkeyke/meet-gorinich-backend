import { ProductService } from './product.sercive';
import {Request, Response} from 'express'

const service = new ProductService()

export class ProductController {
    async getProduct(req: Request, res: Response) {
        try {
            console.log(req.params.nameProduct);
            return res.status(200).json({message: req.params.nameProduct})
        } catch (err) {
            res.status(400).json({error: err})
        }
    }

    async createProduct(req: Request, res: Response) {
        const {name, description, count} = req.body
        console.log(req.body);
        
        try {
            await service.createProduct(name, description, count)
            return res.status(201).json({message: 'New product create'})
        } catch (err) {
            res.status(400).json({error: err})
        }
    }
}