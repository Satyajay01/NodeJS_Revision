import express from "express";
import userModel from "./usermodel.js"


const app = express();

app.get("/",(req, res)=>{
    res.send("hello world");
})

// create
app.get("/create",async (req, res)=>{
    const createduser = await userModel.create({
        name:"Saty",
        email:"saty@gmail.com",
        username:"Saty01"
    })
    res.send(createduser)
})

//update
app.get("/update", async (req, res) => {
    const updatedUser = await userModel.findOneAndUpdate(
        { username: "Satyajay01" },       
        { name: "Satyajay Dibya" },       
        { new: true }                     
    );
    res.send(updatedUser);
})

// read all users
app.get('/read', async (req, res)=>{
    const users = await userModel.find();
    res.send(users);
})

// read only single user
app.get('/readsingleuser', async (req, res)=>{
    const users = await userModel.findOne({username: "Satyajay01"});
    res.send(users);
})

//delete
app.get("/delete", async (req, res)=>{
const userdeleted = await userModel.findOneAndDelete({username: "Saty01"});
res.send(userdeleted);

})

app.listen(3000, ()=>{
    console.log("server started...");
    
})