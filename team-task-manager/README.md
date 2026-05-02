# 🚀 Team Task Manager (MERN Stack)

A modern **full-stack task management platform** to manage projects, assign tasks, and collaborate with teams — built using **MongoDB, Express, React (Vite), Node.js**.

---

## 🌐 Live Demo

- 🔗 **Frontend (Vercel):** https://your-frontend-link.vercel.app  
- 🔗 **Backend (Render):** https://your-backend-link.onrender.com  

---

## 📂 GitHub Repository

👉 https://github.com/YOUR_USERNAME/team-task-manager

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
<img width="1919" height="942" alt="image" src="https://github.com/user-attachments/assets/7c31cb52-eb84-4750-91c5-1e2573b254ce" />


### 📊 Dashboard
<img width="1919" height="934" alt="image" src="https://github.com/user-attachments/assets/edd02152-d005-4e7e-aed2-cc63d9cd2bf0" />


### 📁 Projects
<img width="1917" height="883" alt="image" src="https://github.com/user-attachments/assets/f419a574-3bb4-4bbe-818a-7e259f6e66bd" />


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
📧 your-email@gmail.com  
🔗 https://github.com/YOUR_USERNAME  

---

## ⭐ Support

If you like this project:

👉 Give it a ⭐ on GitHub  
👉 Share with your friends  

---

🔥 Built with passion to learn and grow in Full Stack Development
