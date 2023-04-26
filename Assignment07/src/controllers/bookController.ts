import { Request,Response,NextFunction } from "express";
import { createUserService, deleteUserService, findUserService, getUserService, updateUserService } from "../services/bookService";

const getUser = async(req : Request,res : Response,next : NextFunction) => {
    getUserService(req,res,next);
}

const createUser = async(req : Request,res : Response,next : NextFunction) => {
    createUserService(req,res,next);
}

const findUser = async(req : Request,res : Response,next : NextFunction) => {
    findUserService(req,res,next);
}

const updateUser = async(req : Request,res : Response,next : NextFunction) => {
    updateUserService(req,res,next);
}

const deleteUser = async(req : Request,res : Response,next : NextFunction) => {
    deleteUserService(req,res,next);
}

export {getUser,createUser,findUser,updateUser,deleteUser}