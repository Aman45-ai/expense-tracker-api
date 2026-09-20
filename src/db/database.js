import mongoose from "mongoose"
import config from "../config/config.js"

const connectDB = async() => {
    try{
        await mongoose.connect(config.MONGO_URI)
        console.log("Database Successfully Connected")
    }catch(error){
        console.log("Error in connecting with db", error)
    }
}

export default connectDB