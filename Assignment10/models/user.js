import { Schema,model } from "mongoose";
import Joi from 'joi';

const userSchema = new Schema({
    name : {type : String,required : true},
    email : {type : String,required : true},
    password : {type : String,required : true}
})

const userModel = model('user',userSchema);

const validate = (user) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });
    return schema.validate(user);
};

export {userModel,validate};