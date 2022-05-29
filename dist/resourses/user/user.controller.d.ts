import { Request, Response } from 'express';
export declare class UserController {
    register(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    login(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    getUserInfo(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateUserInfo(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
