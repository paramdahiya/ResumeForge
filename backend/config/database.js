// connect to db
const mongoose = require('mongoose')
require('dotenv').config()

const connectToDB = async ()=>{
    try{
        const mongooseInstance = await mongoose.connect(process.env.DB_URI)
        console.log('connected to database:', mongooseInstance.connection.host)
    }catch(e){
        console.log('Cannot connect to database', e)
    }
}
module.exports = {connectToDB}

