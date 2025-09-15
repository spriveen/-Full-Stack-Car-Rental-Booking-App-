import imagekit from "../configs/imageKit.js";
import Car from "../models/Car.js";
import User from "../models/User.js";
import fs from "fs";

// Change role to owner
export const changeRoleToOwner = async (req, res) => {
  try {
    const { _id } = req.user; // from protect middleware
    await User.findByIdAndUpdate(_id, { role: "owner" });
    return res.json({ success: true, message: "Now you can list cars" });
  } catch (error) {
    console.error(error.message);
    return res.json({ success: false, message: error.message });
  }
};

// Add a car
export const addCar = async (req, res) => {
  try {
    const { _id } = req.user;
    let car = JSON.parse(req.body.carData);
    const imageFile = req.file;

    // Upload image to imagekit
    const fileBuffer = fs.readFileSync(imageFile.path);
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/cars",
    });

    // Optimize through imagekit URL transformation
    const imageURL = imagekit.url({
      path: response.filePath,
      transformation: [
        { width: "1280" },   // width resizing
        { quality: "auto" }, // auto compression
        { format: "webp" }   // modern format
      ],
    });

    await Car.create({ ...car, owner: _id, image: imageURL });

    return res.json({ success: true, message: "Car Added" });
  } catch (error) {
    console.error(error.message);
    return res.json({ success: false, message: error.message });
  }
};
