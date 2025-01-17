// Third Party Middleware.........
// morgan is a Third Party Middleware for get information like request method, route and MS
import express from "express";
import morgan from "morgan";

const app = express();



app.use(morgan('dev')) // this Middleware for all Routs


app.get('/',(req, res)=>{
    res.send('Home Page');
})

app.get('/about', (req, res)=>{
    res.send('About page');
})


// this Middleware for only one Route
app.get('/contact', 
    (req, res, next)=>{
        let a=2, b=2
        let sum = a+b

        if (sum==4) {
            console.log(sum);
            return next();  
        }else{
            res.send('Middleware Error');  
        }
    },
    (req, res)=>{
    res.send('Contact page with single route Middleware');
})


app.listen(3000,()=>{
    console.log("Server Started...");
    
})