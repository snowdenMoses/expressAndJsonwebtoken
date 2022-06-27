import jwt from "jsonwebtoken";
import express, {Application,Request,Response} from "express";
import cookieParser from "cookie-parser";

import login from "./middlewares/login";

const port = process.env.PORT || 5001

const data = [{
    name:"Snowden",
    age:31
},
{
    name:"Eddy",
    age:29
}]


const app:Application = express()

app.use(express.json())
app.use(cookieParser())

app.get("/",(req:Request,res:Response)=>{
    res.send("Home Page")
   
    
})

app.get("/details",(req:Request,res:Response)=>{
    res.send(data)
})

app.post("/login", (req:Request,res:Response)=>{
    const name:string = req.body.name;
    const password:string = req.body.password
    if (name==="Moses" && password==="snowden"){

        const token =jwt.sign({name:"name",password:"password"},"secretkey",{ expiresIn:"10s"})
        res.cookie("token",token,{httpOnly:true,maxAge:20000})
        res.sendStatus(201)
        
    }
    
})

app.listen(port,()=>{
    console.log(`Listening at Port ${port}`)
})