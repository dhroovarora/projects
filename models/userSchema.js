const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    fname: {
        type:String,
        required:true
    },
    phoneNumber: {
        type:Number,
        required:true,
        unique:true
    }, 
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    }
},{
    timestamps:true
})
const user = mongoose.model('user',userSchema)
module.exports={userSchema}