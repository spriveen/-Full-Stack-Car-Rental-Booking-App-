import express from "express";
import { getUserData, loginUser, registerUser } from "../controllers/userControllers.js"; 
import { protect } from "../middleware/auth.js"; // ✅ added .js

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/data', protect, getUserData);

export default userRouter;
