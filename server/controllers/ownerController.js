import User from "../models/User.js";


export const changeRoleToOwner = async ()=>{
    try {
        const {_id} = req.user;
        await User.findByIdAndUpdate(id,{role:"owner"})
        res.json({sucess: true, message: "Now you can list car"})
    } catch (error) {
        console.log(error.message)
         res.json({sucess: false, message: error.message})
        
    }
}

// API TO LIST CAR

export const addCar = async ()=>{
    try {
        const {_id} = req.user;
        let car = JSON.parse(req.body.carData);
        const imageFile = req.file;
    } catch (error) {
        console.log(error.message)
         res.json({sucess: false, message: error.message})
    }
}