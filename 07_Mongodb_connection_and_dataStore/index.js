import express from "express";
import userModel from "./models/user.js";
import connection from './config/db.js'

const app=express();
app.set("view engine",'ejs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

// ------------
app.get('/register',(req, res)=>{
    res.render("register")
})
app.post('/register', async (req, res)=>{
    console.log(req.body);

    const {username,email,password}=req.body
    await userModel.create({
        username:username,
        email:email,
        password:password
    })
    res.send("User Register")
    
})



app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})