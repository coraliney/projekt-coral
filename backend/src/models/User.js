import mongoose from "mongoose";

//Prints for users
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  car: {
    type: String,
  },
  destinationFrom: {
    type: String,
  },
  destinationTo: {
    type: String,
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

