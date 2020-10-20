import Mongoose from "mongoose";
import AppError from "@shared/errors/AppError";
import { Request, Response, NextFunction } from "express";

export default function checkIsValidMongoId(req: Request, res: Response, next: NextFunction): void {
    const { id } = req.params;

    if (!id) {
        throw new AppError("ObjectId is missing", 400);
    }

    try {
        if(!Mongoose.Types.ObjectId.isValid(id)){
          throw new AppError("Invalid ObjectId");
        }
        return next();
    } catch {
        throw new AppError("Invalid ObjectId", 400);
    }

}
