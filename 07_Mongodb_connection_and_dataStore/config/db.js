import mongoose from "mongoose";

const connection = mongoose.connect("mongodb://0.0.0.0/men").then(()=>{ //men is a db name 
    console.log("connected to database")
})


export default connection;




