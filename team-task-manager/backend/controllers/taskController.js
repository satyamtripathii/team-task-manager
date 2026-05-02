const Task = require("../models/Task");

// Create Task
exports.createTask = async (req, res, next) => {
  try {
    const { title, description, project, assignedTo, dueDate } = req.body;

    const task = await Task.create({
      title,
      description,
      project,
      assignedTo,
      dueDate,
    });

    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

// Get Tasks (for logged-in user)
exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({
      assignedTo: req.user._id,
    })
      .populate("project", "title")
      .populate("assignedTo", "name email");

    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

// Update Task Status
exports.updateTaskStatus = async (req, res, next) => {
  try {
    const { status } = req.body;

    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.status = status;
    await task.save();

    res.json(task);
  } catch (error) {
    next(error);
  }
};