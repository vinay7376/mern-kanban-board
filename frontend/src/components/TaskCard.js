import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const TaskCard = ({ task, refresh }) => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: task.title,
    description: task.description,
    status: task.status,
    priority: task.priority,
  });

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5001/api/tasks/${task._id}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      toast.success("🗑️ Task Deleted");
      refresh();
    } catch (error) {
      toast.error("❌ Delete Failed");
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5001/api/tasks/${task._id}`, formData, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      toast.success("✅ Task Updated");
      setEditing(false);
      refresh();
    } catch (err) {
      toast.error("❌ Update Failed");
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-md p-5 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1 relative border-l-4 border-blue-500 mb-4">

      {editing ? (
        <div className="space-y-3">
          <input
            className="w-full border px-3 py-2 rounded"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <textarea
            className="w-full border px-3 py-2 rounded"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
          <select
            className="w-full border px-3 py-2 rounded"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          >
            <option>To Do</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <select
            className="w-full border px-3 py-2 rounded"
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <div className="flex justify-end gap-2">
            <button
              onClick={handleUpdate}
              className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Save
            </button>
            <button
              onClick={() => setEditing(false)}
              className="px-4 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
          <p className="text-sm text-gray-600 mt-1 mb-2">{task.description}</p>
          <div className="flex justify-between items-center text-xs">
            <span className={`px-2 py-1 rounded-full font-semibold bg-blue-100 text-blue-700`}>
              {task.status}
            </span>
            <span className={`px-2 py-1 rounded-full font-semibold bg-yellow-100 text-yellow-700`}>
              {task.priority}
            </span>
          </div>
          <div className="absolute top-3 right-3 flex space-x-2">
            <FaEdit className="text-blue-600 cursor-pointer hover:text-blue-800" onClick={() => setEditing(true)} />
            <FaTrash className="text-red-600 cursor-pointer hover:text-red-800" onClick={handleDelete} />
          </div>
        </>
      )}
    </div>
  );
};

export default TaskCard;
