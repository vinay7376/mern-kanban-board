const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const http = require("http");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
const server = http.createServer(app);

// Real-time: Socket.IO Setup
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connect
connectDB();

// Sample route
app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

// Socket.IO test
io.on("connection", (socket) => {
  console.log("🔗 User connected: " + socket.id);
});

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);
