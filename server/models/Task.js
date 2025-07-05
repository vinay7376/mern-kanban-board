const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: String,
    enum: ["To Do", "In Progress", "Completed"], // 🛠️ Enum values ko yahi likha hai
    default: "To Do",
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"], // 🛠️ Capital first letter
    default: "Medium",
  },
  assignedTo: {
    type: String, // 🛠️ ObjectId nahi — String hi rakh lo
    default: "self",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model("Task", taskSchema);
