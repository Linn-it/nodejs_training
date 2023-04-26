import { Response, Request, NextFunction } from "express";

export default (err: any,req: Request,res: Response,next: NextFunction) => {
    const { message, data } = err;
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({ message, data, status: 0 });
};