const http =require("http");
const express= require("express");
const path=require("path")
const app = express();
const server=http.createServer(app);


const {Server}= require("socket.io");
const io= new Server(server); // handle the sockets


// socket handle

io.on('connection',(socket)=>{
     socket.on('userMessage', (message)=>{
         io.emit("message",message);
     }) 
});








app.use(express.static(path.resolve("./public")));

app.get('/',(req,res)=>{
    return res.sendFile("/public/index.html");
})

server.listen(9000, ()=>{
    console.log(`Server Started at Port : 9000`)
})