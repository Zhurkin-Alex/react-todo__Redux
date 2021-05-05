const express = require("express");
const router = express.Router();
const UserOne = require("../models/user");
const Roles = require("../models/model");
const bcrypt = require("bcryptjs");
const {check, validationResult}= require('express-validator') //for check user value
const jwt = require('jsonwebtoken')
require('dotenv').config()
const saltRounds = 9;

const generateAccessToken = (id,roles)=>{
  const payload={
    id,
    roles
  }
  return jwt.sign(payload, process.env.SECRETCONFIG, {expiresIn:"12h"})
}

router.post("/registration", [
  check('name', "Имя пользователя не может быть пустым").notEmpty(),
  check('password', "Пароль должен быть больше 5 символов").isLength({min:5})
],
 async (req, res) => {
  // console.log(req.body);
  try {  
    //for validation on registration value
    const errors = validationResult(req) 
     if(!errors.isEmpty()){
       return res.status(400).json({message:"Ошибка при регистрации!", errors})
     }
    const { email, name, password,paswordcheck} = req.body;
     
    
    if(paswordcheck==123){
      console.log("admin");
    

      const user = await UserOne.findOne({ email });
      // console.log(user);
      if (user) {
        return res.status(400).json({ message: "Пользователь с таким именем уже существует" });
      }
      const hashPassword =await  bcrypt.hash(password, saltRounds)

      const Role = await Roles.findOne({value:"ADMIN"})

      

      const User = await UserOne.create({
        name,
        email,
        password:hashPassword,   
        roles:[Role.value]  
      });
      const token = generateAccessToken(User._id,User.roles)
      
      res.status(200).json({message:"Пользователь успешно зарегистрирован", UserOne, token})

   }

   
    const user = await UserOne.findOne({ email });
    // console.log(user);
    if (user) {
      return res.status(400).json({ message: "Пользователь с таким именем уже существует" });
    }
    const hashPassword =await  bcrypt.hash(password, saltRounds)
  
    const Role = await Roles.findOne({value:"User"})

   

    const User = await UserOne.create({
      name,
      email,
      password:hashPassword,   
      roles:[Role.value]  
    });
    const token = generateAccessToken(User._id,User.roles)
    console.log(User);
    res.status(200).json({message:"Пользователь успешно зарегистрирован", UserOne, token})
    // if(passwordCheck == 123){
    //   const newUser = await User.create({
    //     name,email,password,

    //   })

    // }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Registration error" });
  }
});

router.post("/login", async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Login error" });
  }
});

router.get("/user", async (req, res) => {
  try {
    res.json("server work");
  } catch (error) {}
});

module.exports = router;
