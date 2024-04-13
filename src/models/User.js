import { Schema, model } from "mongoose";


const userSchema = new Schema({
    name:{
        type: String,
        require: true,
    },
    last_name: {
        type: String,
        require: true,
    },
    ci:{
        type: Number,
        require: true,
        unique: true,
    },
    user_name:{
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    }
});

export default model('User', userSchema);