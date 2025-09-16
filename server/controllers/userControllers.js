import User from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Car from "../models/Car.js";

// Generate JWT Token
const generateToken = (userId)=>{
   const payload = userId;
   return jwt.sign(payload,process.env.JWT_SECRET)
}

//  Register user
 export const registerUser = async(req,res)=>{
   try {
     const {name, email, password} = req.body
     
     if(!name || !email || !password ||password.length < 8){
         return res.json ({sucess:false, message:'fill all the fields'})
     }
       const userExits = await User.findOne ({email})
         if (userExits){
          return res.json ({sucess:false, message:'User already exists'})  
         }
         const hashedPassword =  await bcrypt.hash(password,10)
         const user = await User.create({name, email, password:hashedPassword})
         const token = generateToken(user._id.toString())
         res.json ({sucess:true, token})


   } catch (error) {
    console.log(error.message);
    res.json ({sucess:false, message:error.message})
   }
 }

// Login user 
export const loginUser = async (req,res)=>{
   try {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(!user){
        return res.json({sucess:false, message:"User not found"})
    }
    const isMatch = await bcrypt.compare(password, user.password); // fixed spelling
if (!isMatch) {
  return res.json({ success: false, message: "Invalid Credentials" });
}
    const token = generateToken(user._id.toString())
    res.json ({sucess:true, token})
   } catch (error) {
      console.log(error.message);
    res.json ({sucess:false, message:error.message})
   }
}

// Get User data usuing Token (JWT)
export const getUserData = async (req,res) =>{
  try {
    const {user} = req;
    res.json({success:true, user})
  } catch (error) {
     console.log(error.message);
    res.json ({sucess:false, message:error.message})
  }
}

//  Get all car for the frontend
export const getCars = async (req,res) =>{
  try {
   const cars = await Car.find({isAvaliable:true})
    res.json ({sucess:true, cars})
  } catch (error) {
     console.log(error.message);
    res.json ({sucess:false, message:error.message})
  }
}