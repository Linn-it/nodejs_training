import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import bodyParser from 'body-parser';

import './auth/auth.js'
import userRoute from './routes/userRoute.js'
import secureRoute from './routes/secure-route.js'

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(passport.initialize());

app.use('/',userRoute);
app.use('/user',passport.authenticate('jwt',{session : false}),secureRoute);

app.use((err,req,res,next) => {
    res.status(err.status || 500)
        res.json({error : err});
})

mongoose.connect(process.env.DB || '')
    .then(console.log('Database is connected'));

app.listen(process.env.PORT,() => console.log(`Server is running on port ${process.env.PORT}`));