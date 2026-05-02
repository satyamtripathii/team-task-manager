const express = require("express");
const router = express.Router();

// Controllers
const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

// Middleware
const protect = require("../middleware/authMiddleware");

// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected Route (Test)
router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

module.exports = router;