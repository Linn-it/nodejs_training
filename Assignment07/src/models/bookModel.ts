import { Schema,model } from "mongoose";

const bookSchema = new Schema({
    author : {type : String,required : true,unique : true},
    title : {type : String,required : true},
    desc : {type : String,required : true},
    },
    {timestamps : true});

export default model('book',bookSchema);