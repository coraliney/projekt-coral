import bcrypt from "bcrypt";
import { User } from "../models/User.js";

//Register new user
export const register = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const { password, email, ...userData } = req.body;
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const existingUser = await User.findOne({ email: trimmedEmail });

    if (existingUser) {
      console.error("Email is already taken");
      return res.status(400).json({ error: "Email is already taken" });
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(trimmedEmail)) {
      console.error("Invalid email format");
      return res.status(400).json({ error: "Invalid email format" });
    }

    if (trimmedPassword.length < 8) {
      console.error("Password should be at least 8 characters");
      return res
        .status(400)
        .json({ error: "Password should be at least 8 characters" });
    }

    const hashedPassword = await bcrypt.hash(trimmedPassword, 8);
    const newUser = new User({
      ...userData,
      email: trimmedEmail,
      password: hashedPassword,
      notificationToken: req.body.notificationToken,
    });

    await newUser.save();
    console.log("User created successfully:", newUser);
    res
      .status(201)
      .json({ message: "User created successfully!", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
};

//Login user
export const login = async (req, res) => {
  try {
    const { password, email } = req.body;

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    const user = await User.findOne({ email: trimmedEmail });

    if (!user) {
      console.error("User not found");
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(trimmedPassword, user.password);

    if (!passwordMatch) {
      console.error("Incorrect password");
      return res.status(401).json({ error: "Invalid credentials" });
    }

    console.log("Login successful:", user);

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

//Get user based on ID.
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if(!user) {
      console.error("Användaren hittades ej");
      return res.status(404).json({ error: "Användaren hittades ej"});
    }
    console.log("Användare:", user);
    res.status(200).json(user);
  } catch (error) {
    console.error("Fel vid hämtning av användare:", error);
    res.status(500).json({ error: "Någonting gick fel"});
  }
};

//Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      console.error("Användaren hittades ej");
      return res.status(404).json({ error: "Användaren hittades ej"});
    }
    console.log("Användare:", users);
    res.status(200).json(users);
  } catch (error) {
    console.error ("Fel vid hämtning av användare:", error);
    res.status(500).json({error: "Någonting gick fel" });
  }
};