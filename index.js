import express from 'express';
import dotenv from 'dotenv';
import databaseConnection from './Utility/Database/Db.js';
dotenv.config()
let app = express(); 

app.use(express.json());

let port = process.env.PORT ||3500
app.listen(port ,async() =>{
    try {
        await databaseConnection();
        console.log(`server listening on port ${port}`);
    } catch (error) {
        console.log(`app listening error: ${error}`);
    }
})