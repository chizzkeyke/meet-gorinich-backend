import { ProductI } from "../product/product.interface"

export interface OrderI {
    price: number
    products: ProductI[]
    client: string
    phoneNumberClient: number
    comment?: string
    email: string
    typeDelivery: 'Доставка' | 'Самовызов'
    address?: string 
    date: string
}