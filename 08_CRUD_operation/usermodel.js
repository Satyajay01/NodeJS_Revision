import mongoose from "mongoose";

mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

// userSchema
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,

});

// model 
export default mongoose.model("User", userSchema);


