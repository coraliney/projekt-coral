
import express from "express";
import { register, login } from "../controllers/userController.js";

const router = express.Router();

//Pointing at:
router.post("/register", register);
router.post("/login", login);

export { router as userRouter };