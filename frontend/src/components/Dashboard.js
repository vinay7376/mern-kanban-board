import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskCard from "./TaskCard";
import AddTaskForm from "./AddTaskForm";
import { useNavigate } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const res = await axios.get("http://localhost:5001/api/tasks", {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to fetch tasks", err);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (!user) navigate("/login");
  }, []);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-10 flex items-center justify-center gap-2">
          <FaClipboardList className="text-blue-600 text-3xl" />
          Kanban Task Manager
        </h1>

        {/* Add Task Form */}
        <div className="mb-8">
          <AddTaskForm onTaskAdded={fetchTasks} />
        </div>

        {/* Task Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* To Do */}
          <div className="bg-white rounded-xl shadow-lg p-5 border-l-8 border-yellow-400">
            <h2 className="text-2xl font-semibold text-yellow-600 mb-4">📝 To Do</h2>
            {tasks.filter((t) => t.status === "To Do").map((task) => (
              <TaskCard key={task._id} task={task} refresh={fetchTasks} />
            ))}
          </div>

          {/* In Progress */}
          <div className="bg-white rounded-xl shadow-lg p-5 border-l-8 border-blue-400">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">🚧 In Progress</h2>
            {tasks.filter((t) => t.status === "In Progress").map((task) => (
              <TaskCard key={task._id} task={task} refresh={fetchTasks} />
            ))}
          </div>

          {/* Completed */}
          <div className="bg-white rounded-xl shadow-lg p-5 border-l-8 border-green-500">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">✅ Completed</h2>
            {tasks.filter((t) => t.status === "Completed").map((task) => (
              <TaskCard key={task._id} task={task} refresh={fetchTasks} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
