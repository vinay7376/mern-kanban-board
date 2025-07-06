# 🗂️ MERN Kanban Task Board

A collaborative Kanban-style task management app built using the MERN stack. Supports multiple users with real-time updates, smart task assignment, conflict detection, and more.

---

## 🔐 Features

- 🔐 Secure user registration and login (JWT + Bcrypt)
- 📋 Create, update, delete tasks with status & priority
- 🔄 Real-time updates using Socket.IO
- 📦 Smart Assign: auto-assign to user with least tasks
- ⚔️ Conflict detection if two users edit same task
- 🧾 Activity log of last 20 changes
- ✨ Clean, responsive UI (no CSS frameworks)
- 💬 Toast notifications, animations, smooth UX

---

## 📽️ Demo Video

🎥 [Watch on YouTube](https://youtu.be/KrmddI5ngPs)  
📸 Thumbnail:  
![Demo Thumbnail](https://img.youtube.com/vi/KrmddI5ngPs/0.jpg)

---

## 🚀 Deployed Live App

- 🌐 **Frontend**: [https://mern-kanban-board-eight.vercel.app](https://mern-kanban-board-eight.vercel.app)  
- 🔗 **Backend**: [https://mern-kanban-board-wtia.onrender.com](https://mern-kanban-board-wtia.onrender.com)

---
## 🔐 Demo Login Credentials (For Testing)

You can log in using the following test user:

- 📧 Email: vinay@gmail.com  
- 🔑 Password: 123456

---

## ⚙️ Tech Stack

- **Frontend**: React, TailwindCSS, Axios, Toastify
- **Backend**: Node.js, Express.js, MongoDB Atlas
- **Authentication**: JWT, Bcrypt
- **Real-Time**: Socket.IO
- **Deployment**: Vercel (frontend), Render (backend)

---

## 💡 Custom Business Logic

### 🧠 Smart Assign Logic

When "Smart Assign" is clicked on an unassigned task, the server counts active tasks per user and assigns it to the user with the **least active tasks**. This ensures balanced workload.

### ⚔️ Conflict Detection

If two users try to edit the same task simultaneously:
- Backend detects version mismatch
- UI displays both versions
- User chooses to either **overwrite** or **merge**

---

## 📜 API Endpoints (Backend)

| Method | Endpoint              | Description               |
|--------|------------------------|---------------------------|
| POST   | `/api/users/register` | Register a user           |
| POST   | `/api/users/login`    | Login a user              |
| GET    | `/api/tasks`          | Get all tasks             |
| POST   | `/api/tasks`          | Create a task             |
| PUT    | `/api/tasks/:id`      | Update a task             |
| DELETE | `/api/tasks/:id`      | Delete a task             |
| GET    | `/api/actions`        | Last 20 actions performed |

---

## 📂 Folder Structure

```plaintext
mern-kanban-board/
├── frontend/
│   ├── src/components/
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Dashboard.js
│   │   ├── AddTaskForm.js
│   │   └── TaskCard.js
│   └── App.js
│
├── server/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── server.js
│   └── .env

---

## 🧠 How to Run Locally

---
🔧 Backend Setup
bash
cd server
npm install
npm start

---

🔑 Backend .env File
ini
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

💻 Frontend Setup
bash
cd frontend
npm install
npm start

👨‍💻 Author
Developed by: Vinay Pal

📧 Email: vphandia7376@gmail.com

🌐 GitHub: https://github.com/vinay7376

📄 License
This project is licensed under the MIT License — feel free to use and modify.

