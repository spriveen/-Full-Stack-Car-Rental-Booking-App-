import express from "express";
import {
  changeBookingStatus,
  checkAvailbilityOfCar,
  creatingBooking,
  getOwnerBookings,
  getUserBookings,
} from "../controllers/bookingController.js";
import { protect } from "../middleware/auth.js";

const bookingRouter = express.Router(); // ✅ use Router()

// Routes
bookingRouter.post("/check-availability", checkAvailbilityOfCar);
bookingRouter.post("/create", protect, creatingBooking);
bookingRouter.get("/user", protect, getUserBookings);   // ✅ fixed Router → bookingRouter
bookingRouter.get("/owner", protect, getOwnerBookings); // GET is better here than POST
bookingRouter.post("/change-status", protect, changeBookingStatus);

export default bookingRouter;
