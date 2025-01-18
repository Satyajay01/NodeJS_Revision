import mongoose, { Types }  from "mongoose";

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,

    // // for the gender
    // gender:{
    //     type:String,
    //     enum:["male","female"],
    // }
})
const userModel = mongoose.model('user', userSchema)



export default userModel;



