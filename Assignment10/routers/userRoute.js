import express from 'express';
import { userModel,validate } from '../models/user.js';

const router = express.Router();

router.post('/',async(req,res) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        const user = await new userModel(req.body).save();
        res.send(user);
    } catch (error) {
        res.send('An error occurred');
        console.log(error);
    }
});

export default router;