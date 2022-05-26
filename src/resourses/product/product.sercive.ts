import { modelProduct } from './product.model';

export class ProductService {
    async getProduct(name: string) {
        const product = await modelProduct.findOne({name})
        return product
    }

    async createProduct(name: string, description: string, count: number) {
        const newProduct = await modelProduct.create({
            name, description, count
        })
        await newProduct.save()

        return newProduct
    }
}
