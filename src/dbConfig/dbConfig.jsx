import mongoose, { mongo } from "mongoose";

export async function Connect(){

try {
    mongoose.connect(process.env.MONGO_URI);
    const connection = mongoose.connection;
    connection.on("connected", ()=>{
        console.log("MongoDb Connected Successfully");
    })
} catch (error) {
    console.log("Something went wrong");
    console.log(error);
}



}