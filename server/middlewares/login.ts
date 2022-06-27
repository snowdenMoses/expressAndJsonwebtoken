
import jwt from "jsonwebtoken";
import express, {Application,Request,Response} from "express";
import cookieParser from "cookie-parser";

const app:Application = express()
// app.use(express.json())
app.use(cookieParser())

const login = (req:any,res:any,next:any)=>{

    const token =jwt.sign({name:"name",password:"password"},"secretkey",{ expiresIn:"1h"})
       res.cookie("token",token,{
        httpOnly:true
    })

    next()
}

export default login