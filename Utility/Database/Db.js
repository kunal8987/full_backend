import dotenv from "dotenv";    
import mongoose from "mongoose";
dotenv.config()

let connection  = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL )
        console.log(`mongodb connected ${connection.connection.host}`);
    } catch (error) {
        console.log(`mongodb connection error: ${error}`);
    }
}


module.exports = {connection}