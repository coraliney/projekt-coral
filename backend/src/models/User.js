import mongoose from "mongoose";

//Prints for users
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  car: {
    type: String,
  },
  destinationFrom: {
    type: String,
    required: true,
  },
  destinationTo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
});

export const User = mongoose.model("User", userSchema);

