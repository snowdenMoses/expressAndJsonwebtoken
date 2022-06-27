import jwt from "jsonwebtoken";
import express, {Application,NextFunction,Request,Response} from "express";
import cookieParser from "cookie-parser";

const app:Application = express()
app.use(cookieParser())

const fetchData = (req:Request,res:Response,next:NextFunction)=>{
    const getCookie = req.cookies.token
    const compareToken =jwt.verify(getCookie,"secretkey")
    if(!compareToken){
        res.send("Bad Auth")
        
    }
    else{
        next()
    }
    

    
}

export default fetchData