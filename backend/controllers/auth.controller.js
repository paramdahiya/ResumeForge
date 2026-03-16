// controller for user methods
const blackListTokenModel = require('../models/blackListToken.model')
const userModel = require('../models/user.model')
const {hashPassword, isPasswordValid} = require('../utils/hash')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const registerUser =  async (req, res)=>{
    try{
        const {userName, email, password} = req.body
        if(!userName || !email || !password){
            return res.status(400).json({message:'Some fields are missing'})
        }

        // check if the user with the userName or email already exists
        const userExists = await userModel.findOne({
            $or:[{userName}, {email}]
        })

        if(userExists){
            return res.status(400).json({message:'User exists with the given user name or email'})
        }

        // hash password
        const passwordHash = await hashPassword(password)
        const newUser = await userModel.create({userName, email, password:passwordHash})

        return res.status(201).json({message:'User created successfully', user:newUser})

    }catch(e){
        return res.status(500).json({message:'Server Error', error:e.message})
    }
}

const loginUser = async (req, res)=>{
    try {
        const {email, password} = req.body
        if(!email || !password){
            return res.status(400).json({message:'Some fields are missing'})
        }

        // find the user in db
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).json({message: 'User does not exist'})
        }

        const passwordMatch = await isPasswordValid(password, user.password)
        if(!passwordMatch){
            return res.status(401).json({message: 'Invalid password'})
        }

        // create a token
        const token = jwt.sign({
            id:user._id,
            name:user.userName,
            email:user.email
        } , process.env.JWT_SECRET, {
            expiresIn:'1h'
        })

        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'None',
            maxAge: 60 * 60 * 1000 // 1hr
        })

        return res.status(200).json({token, message:'Logged in successfully', user})
    } catch (error) {
        return res.status(500).json({message:'Server Error', error:error.message})
    }
}

const userLogout = async (req, res)=>{
    const token = req.cookies.token

    if(token){
        await blackListTokenModel.create({token})
    }

    res.clearCookie('token')
    res.status(200).json({message:'logged out successfully'})
}

const getMe = async (req, res)=>{
    try {
        const user = await userModel.findById(req.user.id)

        // does user exist
        if(!user){
            return res.status(404).json({message:'User not found'})
        }

        return res.status(200).json({message:'User fetched successfully', user:{id:user._id, name:user.userName, email: user.email}})

    } catch (error) {
        return res.status(500).json({message:'Server Error', error:error.message})
    }
}

module.exports = {registerUser, loginUser, userLogout, getMe}