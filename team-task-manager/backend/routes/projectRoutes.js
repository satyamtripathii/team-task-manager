const express = require("express");
const router = express.Router();

const {
  createProject,
  getProjects,
} = require("../controllers/projectController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

// Admin creates project
router.post("/", protect, authorizeRoles("admin"), createProject);

// All users can see their projects
router.get("/", protect, getProjects);

module.exports = router;