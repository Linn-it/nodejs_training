import { Schema,model } from "mongoose";

const movieSchema = new Schema({
    name : {type : String,required : true,unique : true},
    year : {type : String,required : true},
    rating : {type : String,required : true}
})

export default model('movie',movieSchema)