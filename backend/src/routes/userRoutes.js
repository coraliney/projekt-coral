
import express from "express";
import { register, login, getUserById, getUsers } from "../controllers/userController.js";

const router = express.Router();

//Pointing at:
router.post("/register", register); //Register a new user
router.post("/login", login); //Loin a user
router.get("/users/:id", getUserById); //GET user based on ID
router.get("/users", getUsers); //GET all users

export { router as userRouter };