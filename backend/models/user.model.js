const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName :{
        type:String,
        unique:[true, 'User exists with this user name'],
        required: true,
    },
    email:{
        type:String,
        unique:[true, 'User exists with this email'],
        required: true,
    },
    password:{
        type:String,
        required:true,
    },
    resumeText:{
        type:String,
    }
    
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel