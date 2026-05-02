const Project = require("../models/Project");

// Create Project (Admin only)
exports.createProject = async (req, res, next) => {
  try {
    const { title, description, members } = req.body;

    const project = await Project.create({
      title,
      description,
      createdBy: req.user._id,
      members,
    });

    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
};

// Get All Projects (User should see their projects)
exports.getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find({
      $or: [
        { createdBy: req.user._id },
        { members: req.user._id },
      ],
    }).populate("members", "name email");

    res.json(projects);
  } catch (error) {
    next(error);
  }
};