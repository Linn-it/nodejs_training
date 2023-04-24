import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import movieRouter from './routes/movieRoute.js'

dotenv.config();

const app = express();
const upload = multer();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(upload.array());

app.use('/api',movieRouter);

app.use((err,req,res,next) => {
    err.status = err.status || 500;
    res.status(err.status).json({
        con : false,
        message : err.message
    })
})

mongoose.connect(process.env.DB || '')
    .then(() => console.log('Database is connected'));

app.listen(process.env.PORT,()=> console.log(`Server is running on port ${process.env.PORT}`));