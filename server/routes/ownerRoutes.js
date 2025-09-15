import express from "express";
import { protect } from "../middleware/auth.js";
import { addCar, changeRoleToOwner, deletecar, getDashboardData, getOwnerCars, toggleCarAvailbility, updateUserImage } from "../controllers/ownerController.js";
import upload from "../middleware/multer.js";

const ownerRouter = express.Router();

ownerRouter.post("/change-role", protect ,changeRoleToOwner)
ownerRouter.post("/add-car", upload.single("image"),protect,addCar)
ownerRouter.get("/cars",protect,getOwnerCars)
ownerRouter.post("/toggle-car",protect,toggleCarAvailbility)
ownerRouter.post("/delete-car",protect,deletecar)

ownerRouter.get('/dashboard', protect, getDashboardData)
ownerRouter.post('/upload-image',upload.single("image"),protect,updateUserImage)

export default ownerRouter;
