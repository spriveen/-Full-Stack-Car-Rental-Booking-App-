import Booking from "../models/Booking.js"
import Car from "../models/Car";


//  function to check Availbility of car for a  given Date
const checkAvailbility = async (car, pickupDate, returnDate )=>{
     const bookings =  await Booking.find({
        car,
        pickupDate: {$lte: returnDate},
        returnDate: {$lte: pickupDate},
     })
     return bookings.length === 0;
}

// Api tio check avalibility of car for the given Date and location
export const checkAvailbilityOfCar = async (req, res)=>{
 try {
     const {location, pickupDate, returnDate} = req.body

     //    fetch all available cars for the given location
        const cars = await Car.find({location, isAvaliable:true})

    //  checkcar availbility for the given date range using promise
    const availableCarPromises = cars.map(async (car)=>{
    const isAvaliable =  await checkAvailbility(car._id, pickupDate, returnDate)
    return {...car._doc, isAvaliable: isAvaliable}
    })

    let availableCars = await Promise.all(availableCarPromises);
    availableCars =  availableCars.filter(car => car.isAvaliable === true)

    res.json({success: true, availableCars})
     
 } catch (error) {
    console.log(error.message);
    res.json({success:false, message:error.message})
 }
}

// Api to create Booking
export const creatingBooking = async (req, res)=>{
    try {
       const {_id} = req.user; 
       const {car, pickupDate, returnDate} = req.body;

       const isAvaliable = await checkAvailbility(car, pickupDate, returnDate)
       if (!isAvaliable){
        return res.json({success:false , message: "Car is not available"})
       }

       const carData = await Car.findById(car)

        // calculate price based on pickUpDate and returnDate
         const picked = new Date(pickupDate);
         const returned = new Date(returnDate);
         const noOfDays = Math.ceil((returned - picked) / (1000 * 60  * 60  * 24))
        const price = carData.pricePerDay * noOfDays;

       await Booking.create({car , owner: carData.owner, user:_id, pickupDate, returnDate,price})

        res.json({success:false, message:"Booking Creatd"})

    } catch (error) {
        console.log(error.message);
    res.json({success:false, message:error.message})
    }
}

// API to List User Booking
export const getUserBookings = async (req,res)=>{
    try {
        const {_id} = req.user;
        const bookings = await Booking.find({user: _id}).populate("car").sort
        ({createdAt: -1})
         res.json({success:true, bookings})

    } catch (error) {
        console.log(error.message);
    res.json({success:false, message:error.message})
    }
}

//  Api To get Owner Booking
export const getOwnerBookings = async (req,res)=>{
    try {
        if(req.user.role !== 'owner') {
            return res.json({success:false, message:"UnAuthorized"})
        }

        const bookings = await Booking.find({owner: req.user._id}).populate
        ('car user').select("-user.password").sort({createdAt: -1})
        res.json({success:true, bookings})

    } catch (error) {
        console.log(error.message);
    res.json({success:false, message:error.message})
    }
}
 
// API TO CHANGR BOOKING Status

export const changeBookingStatus = async (req,res)=>{
    try {
        const {_id} = req.user;
        const {bookingId, status} =req.body
        
        const booking = await Booking.findById(bookingId)
        if(booking.owner.toString() !== _id.toString()){
           return res.json({success: false, message:"Unauthorized"}) 
        }

        booking.status =  status;
        await booking.save ()

        res.json({success: true, message: "Status Updated"})

    } catch (error) {
        console.log(error.message);
    res.json({success:false, message:error.message})
    }
}
 
