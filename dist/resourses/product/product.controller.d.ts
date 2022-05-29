import { Request, Response } from 'express';
export declare class ProductController {
    getProduct(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    createProduct(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    updatePriceProduct(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateCountProduct(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
