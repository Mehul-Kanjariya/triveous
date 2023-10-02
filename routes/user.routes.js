const express = require("express");
const userRouter = express.Router();
const {UserModel} = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

userRouter.post("/register",async(req,res)=>{
    const{email, pass} = req.body
    try{
        bcrypt.hash(pass,5,async(err,hash)=>{
            const user = new UserModel({email,pass:hash})
            await user.save()
            res.status(200).send({"msg":"Registeration has been done !"})
        })
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,pass} = req.body;
    try{
        const user = await UserModel.findOne({email})                        
        if(user){
            bcrypt.compare(pass, user.pass, async(err, result)=>{
                if(result){
                    res.status(200).send({"msg":"Login Successfull","token":jwt.sign({"userID":user._id}, "Triveous")})
                }else{
                    res.status(400).send({"msg":"Wrong Password"});
                }
            })
        }else{
            res.status(400).send({"msg":"Enter correct E-mail"});
        }
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

module.exports={
    userRouter
}