const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String ,
        required: true
    },

    mobile:{
        type: String ,
        required: true, 
        unique: true
    },
    status:{
        type: Boolean 
    },
    otp:{
        type: String 
    },
    credit:{
        type: Number 
    },
     usertype:{
         type:Number 
        //  1- admin , 2- user
     }


});

export const User = mongoose.model('User' , UserSchema);