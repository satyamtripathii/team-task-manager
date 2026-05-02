const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasks,
  updateTaskStatus,
} = require("../controllers/taskController");

const protect = require("../middleware/authMiddleware");

// Create task
router.post("/", protect, createTask);

// Get my tasks
router.get("/", protect, getTasks);

// Update status
router.put("/:id", protect, updateTaskStatus);

module.exports = router;