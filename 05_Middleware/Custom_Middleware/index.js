// Custom Middleware.........
import express, { Router } from "express";

const app = express();


// Middleware
app.use((req, res, next)=>{
    console.log("this is Custom Middleware");
    let a=2, b=2
    let sum = a+b

    if (sum==4) {
        console.log(sum);
        return next();  
    }else{
        res.send('Middleware error');  
    }
    
})

// Routs
app.use('/', (req, res)=>{
    res.send('Home Page');
})


app.listen(3000,()=>{
    console.log("Server Started...");
    
})