import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./src/routes/userRoutes.js";
import { loggin } from "../backend/src/middleware/logins.js";


dotenv.config();

const mongoURI = process.env.MONGODB_URI;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use(loggin);


const port = process.env.PORT || 3000;

// Routes test
app.get("/", (req, res) => {
  res.json({ message: "Test route successful!" });
});
 

app.use("/api",userRouter);


mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error Hapened";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});