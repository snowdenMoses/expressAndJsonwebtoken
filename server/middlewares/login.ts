
import jwt from "jsonwebtoken";
import express, {Application,NextFunction,Request,Response} from "express";
import cookieParser from "cookie-parser";

const app:Application = express()
// app.use(express.json())
app.use(cookieParser())

const login = (req:Request,res:Response,next:NextFunction)=>{

    const token =jwt.sign({name:"name",password:"password"},"secretkey",{ expiresIn:"1h"})
       res.cookie("token",token,{
        httpOnly:true
    })

    next()
}

export default login