# 🚀 Team Task Manager (MERN Stack)

A modern **full-stack task management platform** to manage projects, assign tasks, and collaborate with teams — built using **MongoDB, Express, React (Vite), Node.js**.

---

## 🌐 Live Demo

- 🔗 **Frontend (Vercel):** https://team-task-manager-471ukzswy-satyamtripathiis-projects.vercel.app/
- 🔗 **Backend (Railway):** https://team-task-manager-production-1944.up.railway.app

---

## 📂 GitHub Repository

👉 https://github.com/satyamtripathii/team-task-manager

---

## ✨ Features

### 🔐 Authentication
- User Registration & Login (JWT)
- Role-based access (Admin / Member)

### 📁 Project Management
- Create projects
- Add members to projects
- View only your projects

### 📝 Task Management
- Create tasks inside projects
- Assign tasks to users
- Task status:
  - 🟡 Todo  
  - 🔵 In Progress  
  - 🟢 Done  

### 🎯 Advanced
- Protected Routes (Frontend + Backend)
- Axios interceptor with token
- MongoDB relations (User ↔ Project ↔ Task)
- Clean UI with reusable components

---

## 🧱 Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

---

## 📁 Project Structure
team-task-manager/
│
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ ├── server.js
│ └── .env (not pushed)
│
├── frontend/
│ ├── src/
│ │ ├── api/
│ │ ├── components/
│ │ ├── context/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── index.html
│
└── README.md


---

## ⚙️ Environment Variables

Create a `.env` file inside `backend/`
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


---

## 🛠️ Installation & Setup

### 🔧 Backend
cd backend
npm install
npm run dev

### 💻 Frontend
cd frontend
npm install
npm run dev


---

## 📸 Screenshots

### 🔑 Login Page
<img width="1919" height="938" alt="image" src="https://github.com/user-attachments/assets/9631d128-e494-4781-84e3-0f821d594a20" />
<img width="1919" height="878" alt="image" src="https://github.com/user-attachments/assets/f2558435-bd12-459e-9a14-fb9020331321" />


### 📊 Dashboard
<img width="1919" height="879" alt="image" src="https://github.com/user-attachments/assets/2d9baef2-d219-4a87-991f-fec4d6757981" />


> 👉 Create a `screenshots/` folder and add images

---

## 🚀 Deployment

### 🔹 Backend (Render)
- Create Web Service
- Add environment variables
- Deploy

### 🔹 Frontend (Vercel)
- Import GitHub repo
- Add environment variables if needed
- Deploy

---

## 🔒 Security Notes

- `.env` is not pushed (secured via `.gitignore`)
- JWT used for authentication
- Protected routes on backend

---

## 🧠 Future Improvements

- 🔄 Drag & Drop Task Board (Kanban)
- 👥 Team Invitations
- 🔔 Notifications
- 📊 Analytics Dashboard

---

## 🙌 Author

**Satyam Tripathi**  
🎓 B.Tech CSE | 💻 Full Stack Developer  
📧 satyamtripathi798@gmail.com  
🔗 https://github.com/satyamtripathii 

---

## ⭐ Support

If you like this project:

👉 Give it a ⭐ on GitHub  
👉 Share with your friends  

---

🔥 Built with passion to learn and grow in Full Stack Development
