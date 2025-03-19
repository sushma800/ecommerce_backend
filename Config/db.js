const mongoose =require('mongoose')
require("dotenv").config()

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('mongoDB connected.....')

    }
    catch(error){
        console.error(`Error connecting to mongoDB: ${error.message}`)
        process.exit(1)
    }
}
module.exports=connectDB