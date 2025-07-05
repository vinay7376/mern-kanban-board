import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaPlusCircle } from "react-icons/fa";

const AddTaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("To Do");
  const [priority, setPriority] = useState("High");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    try {
      await axios.post(
        "http://localhost:5001/api/tasks",
        {
          title,
          description: desc,
          status,
          priority,
          assignedTo: "self",
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      toast.success("🎉 Task Added");
      setTitle("");
      setDesc("");
      onTaskAdded();
    } catch (error) {
      toast.error("⚠️ Error creating task");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow p-6 mb-6 transition-all duration-300 hover:shadow-lg"
    >
      <h2 className="text-2xl font-semibold text-blue-800 flex items-center gap-2 mb-4">
        <FaPlusCircle className="text-blue-600" />
        Add New Task
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className="p-2 border rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <select
          className="p-2 border rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>To Do</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
        <textarea
          className="p-2 border rounded col-span-1 md:col-span-2"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />
        <select
          className="p-2 border rounded"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 col-span-1 md:col-span-2 transition"
          type="submit"
        >
          Create Task
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
