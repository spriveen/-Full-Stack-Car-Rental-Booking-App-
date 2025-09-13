import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js"; // <-- add .js
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";


// Initializing Express App
const app = express();

// Connect DATABASE
await connectDB();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Server is running"));
app.use('/api/user', userRouter)
app.use('/api/owner', ownerRouter)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
