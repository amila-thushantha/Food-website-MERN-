import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTAURANT",
    }).then(()=>{
        console.log("Database connection successful");
    }).catch(err=>{
        console.log(`some error occured while connection database! ${err}`);
    });
};