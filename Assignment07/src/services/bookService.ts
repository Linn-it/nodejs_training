import bookDB from '../models/bookModel';
import { Request,Response,NextFunction } from 'express';

const getUserService = async(req : Request,res : Response,next : NextFunction) => {
    try {
        const books = await bookDB.find();
        res.status(200).json({msg : 'All Books',data : books,status : 1});
    } catch (err) {
        res.send('An error occured')
    }
};

const createUserService = async(req : Request,res : Response,next : NextFunction) => {
    try {
        const result = await new bookDB(req.body).save();
        res.status(201).json({msg : 'Create Book Successfully',data : result,status : 1});
    } catch (err) {
        res.send('An error occured')
    }
};

const findUserService = async(req : Request,res : Response,next : NextFunction) => {
    try {
        const book = await bookDB.findById(req.params.id);
        if (!book) {
            const error: any = Error("Not Found!");
            error.statusCode = 404;
            throw error;
          }
          res.json({ data: book, status: 1 });
    } catch (err) {
          res.send("An error occured");
    }
};

const updateUserService = async(req : Request,res : Response,next : NextFunction) => {
    try {
        const book = await bookDB.findById(req.params.id);
        if(!book){
            const error: any = new Error("Not Found!");
            error.statusCode = 404;
            throw error;
        }
            await bookDB.findByIdAndUpdate(book._id,req.body);
            const data = await bookDB.findById(req.params.id);
            res.status(200).json({msg : "Update Book Successfully",data,status : 1})
    } catch (err) {
        res.send("An error occured")
    }
}

const deleteUserService = async(req : Request,res : Response,next : NextFunction) => {
    try {
        const book = await bookDB.findById(req.params.id);
        if(!book){
            const error: any = new Error("Not Found!");
            error.statusCode = 404;
            throw error;
        }
        await bookDB.findByIdAndDelete(req.params.id);
        res.status(200).json({msg : 'Delete Book Successfully',status : 1})
    } catch (err) {
        res.send('An error occured')
    }
}

export {getUserService,createUserService,findUserService,updateUserService,deleteUserService}