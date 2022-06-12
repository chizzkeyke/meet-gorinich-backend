import { ProductI } from './product.interface';
import { Request, Response } from 'express';
import { ProductModel } from './product.model';

export class ProductController {
   async getProducts(req: Request, res: Response) {
      try {
         const products = await ProductModel.find()

         if (!products) throw 'Ошибка в получении данных о продуктах.'

         return res.status(200).json({
            data: products
         })
      } catch (err) {
         return res.status(400).json({
            message: 'Ошибка в получении продуктов.'
         })
      }
   }

   async getProduct(req: Request, res: Response) {
      try {
         const { id } = req.params

         if (!id) return res.status(400).json({ message: 'Параметр не найден.' })

         const product = await ProductModel.findById(id)

         if (!product) throw `Продукт ${id} не был найден.`

         return res.status(200).json({ data: product })
      } catch (err) {
         return res.status(400).json({ error: err })
      }
   }

   async createProduct(req: Request, res: Response) {
      try {
         const { count, description, imageProduct, price, title } = req.body
         const newProduct = await ProductModel.create({ count, description, imageProduct, price, title })
         return res.status(201).json({ message: 'Новый продукт создан.', data: newProduct })
      } catch (err) {
         console.log(err);
         return res.status(400).json({ error: err })
      }
   }

   async updatePriceProduct(req: Request, res: Response) {
      const { nameProduct } = req.params
      const { newPrice } = req.body
      try {
         const updatedPriceProduct = await ProductModel.findOneAndUpdate({ name: nameProduct }, { price: newPrice }, { new: true })

         return res.status(201).json({
            message: `Цена продукта ${updatedPriceProduct?.title} обновлена: ${updatedPriceProduct?.price}.`,
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
         const { id } = req.params
         const { newCount } = req.body
         await ProductModel.findByIdAndUpdate(id, { count: newCount }, { new: true })

         return res.status(201)
      } catch (err) {
         return res.status(400).json({
            message: "Can't update count choosing product."
         })
      }
   }

   async deleteProduct(req: Request, res: Response) {
      try {
         const { id } = req.params

         if (!id) throw 'Передайте параметр'

         const deletedProduct = await ProductModel.findByIdAndDelete(id)
         return res.status(201).json({
            message: `Продукт ${deletedProduct?.title} был удалён.`,
            id
         })
      } catch (err) {
         return res.status(400).json({
            err
         })
      }
   }
}