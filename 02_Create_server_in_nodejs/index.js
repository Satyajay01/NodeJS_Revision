import http from "http";

const server = http.createServer((req, res)=>{
    
    res.end("Hello World")
})

let port=3000;
server.listen(port, ()=>{
    console.log("Server started port No.",port);  
})