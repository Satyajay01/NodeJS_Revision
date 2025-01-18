import express from "express";

const app=express();
app.set("view engine",'ejs')

// this is Built-in Middleware for convert data to json formate
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/",(req, res)=>{
    res.render("index")
})
app.post("/get-form-data",(req, res)=>{
    console.log(req.body);
    res.send("Form data received")
    
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})