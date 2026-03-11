const express = require('express')
require('dotenv').config()
const {connectToDB} = require('./config/database')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const authRouter = require('./routes/auth.router')

const app = express() // creating server instance

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true
}))

app.use('/api/auth',authRouter)

app.listen(process.env.SERVER_PORT || 3000, async ()=>{
    console.log('Server running on port: ', (process.env.SERVER_PORT || 3000))
    connectToDB()
})