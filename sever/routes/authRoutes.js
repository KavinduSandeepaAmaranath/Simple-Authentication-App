const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

// Register route
// POST /api/auth/register
router.post("/register", registerUser);

// Login route
// POST /api/auth/login
router.post("/login", loginUser);

module.exports = router;

