import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bookRoute from './routes/bookRoute'
import error from './middlewares/error'

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended : true}));

mongoose.connect(process.env.DB || '')
    .then(() => {
        app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));

        app.use('/api',bookRoute);
        app.use(error);
    })