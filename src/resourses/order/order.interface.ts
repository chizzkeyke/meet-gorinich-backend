import { ProductI } from "../product/product.interface"

export interface OrderI {
    price: number
    products: ProductI[]
    client: string
    phoneNumberClient: number
    comment?: string
}