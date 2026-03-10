// util methods for password hashing and comparison

const bcrypt = require('bcrypt')

const hashPassword = async (plainText)=>{
    try{
        const hashedPasswrod = await bcrypt.hash(plainText, 10)
        return hashedPasswrod

    }catch(err){
        throw(err)
    }
}

const isPasswordValid = async (plainText, encrypted)=>{
    
    try{
        const match = await bcrypt.compare(plainText, encrypted)
        return match
    }
    catch(e){
        throw(e)
    }
    
}

module.exports = {hashPassword, isPasswordValid}