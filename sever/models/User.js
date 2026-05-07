const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true, // ensures no duplicate emails
      //match: [
        ///^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      //  "Please fill a valid email address",
     // ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
  },
  { timestamps: true } // adds createdAt & updatedAt fields automatically
);

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
