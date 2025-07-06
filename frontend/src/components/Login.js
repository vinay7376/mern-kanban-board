import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://mern-kanban-board-wtia.onrender.com/api/users/login", {

        email,
        password,
      });
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      toast.success("Login Successful!");
      navigate("/dashboard");
    } catch (err) {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm border border-gray-200">
<h2 className="text-3xl font-bold mb-6 text-center text-gray-800 flex justify-center items-center gap-2">
  <FaLock className="text-blue-600" /> Login
</h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
