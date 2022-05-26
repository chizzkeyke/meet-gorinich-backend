import { NextFunction, Request, Response } from 'express';
import { verify } from "jsonwebtoken";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1]
    
    if (!token) {
        return res.status(401).json({
            message: 'Token is not found'
        })
    } 

    try {
        verify(token, 'gorinich')
        next()
    } catch (error) {
        return res.status(403).json({
            error: 'User not verificated.'
        })
    }
}