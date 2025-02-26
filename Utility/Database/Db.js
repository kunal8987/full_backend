import dotenv from "dotenv";    
import mongoose from "mongoose";
dotenv.config();

const databaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`mongodb connected ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`mongodb connection error: ${error}`);
    }
};

export default databaseConnection;
