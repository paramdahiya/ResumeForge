const jwt = require('jsonwebtoken')
const blackListTokenModel = require('../models/blackListToken.model')

const authUser = async (req, res, next)=>{

    const token = req.cookies?.token
    
    if(!token){
        res.status(401).json({message:'No token provided'})
    }

    // is token black listed
    const isBlackListed = await blackListTokenModel.findOne({token})
    if(isBlackListed){
        return res.status(401).json({message:'Token is invalid'})
    }

    // verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({message:'Token verification failed'})
    }
}

module.exports = {authUser}