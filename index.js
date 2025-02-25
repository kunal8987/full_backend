import express from 'express';
import dotenv from 'dotenv';

dotenv.config()
let app = express(); 

app.use(express.json());

let port = process.env.PORT ||3500
app.listen(port ,(req , res) =>{
    try {
        console.log(`server listening on port ${port}`);
    } catch (error) {
        console.log(`app listening error: ${error}`);
    }
})