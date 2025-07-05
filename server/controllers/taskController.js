const Task = require("../models/Task");

const createTask = async (req, res) => {
  const { title, description, status, priority, assignedTo } = req.body;

  try {
     console.log("🧠 REQ.USER:", req.user);
     
    const task = await Task.create({
      title,
      description,
      status,
      priority,
      assignedTo,
      user: req.user._id,
    });

    res.status(201).json(task);
  } catch (error) {
    console.error("Task create error:", error.message);
    res.status(400).json({ message: "Failed to create task" });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;

  try {
    const updated = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Update failed" });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
