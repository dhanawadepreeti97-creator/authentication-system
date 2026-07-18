# 🛡️ AuthSphere – JWT Authentication System

A modern, secure, and responsive Full Stack Authentication System built using **React.js**, **Node.js**, **Express.js**, **MongoDB**, and **JWT Authentication**.

AuthSphere provides a complete user authentication flow with secure login, registration, protected routes, and a beautiful responsive dashboard.

---


# ✨ Features

- 🔐 JWT Authentication
- 👤 User Registration
- 🔑 Secure Login
- 🔒 Protected Dashboard Routes
- 🔑 Password Hashing using Bcrypt
- 🗄️ MongoDB Database Integration
- 📱 Fully Responsive Design
- 🎨 Modern Olive Green Dashboard UI
- 📊 Statistics Dashboard
- 🛡️ Security Analytics Card
- 📈 Recent Activity Section
- 🚪 Logout Functionality
- ⚡ Framer Motion Animations
- 🎯 Mobile Sidebar Navigation

---

# 🛠 Tech Stack

## Frontend

- React.js
- Tailwind CSS
- Framer Motion
- React Router DOM
- Axios
- Lucide React Icons

## Backend

- Node.js
- Express.js
- JWT (jsonwebtoken)
- bcryptjs
- MongoDB Atlas
- Mongoose
- CORS
- dotenv

---

# 📂 Folder Structure

```
Authentication-System/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone [https://github.com/YOUR_USERNAME/authentication-system.git](https://github.com/dhanawadepreeti97-creator/authentication-system.git)
```

```
cd authentication-system
```

---

## Install Frontend

```bash
cd client
npm install
```

Run Frontend

```bash
npm run dev
```

---

## Install Backend

```bash
cd server
npm install
```

Run Backend

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=Your MongoDB Atlas Connection String

JWT_SECRET=Your Secret Key
```

---

# 🚀 API Endpoints

## Register

```
POST /api/auth/register
```

## Login

```
POST /api/auth/login
```

---

# Authentication Flow

```
User
   │
   ▼
Register/Login
   │
   ▼
Express Server
   │
   ▼
MongoDB
   │
   ▼
Generate JWT
   │
   ▼
Return Token
   │
   ▼
Store Token in LocalStorage
   │
   ▼
Access Protected Dashboard
```

---

# 🌟 Dashboard Features

- Responsive Navbar
- Mobile Sidebar
- Welcome Banner
- Statistics Cards
- Security Analytics
- Recent Activity
- Documentation Card
- Footer Section

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- MongoDB Validation
- Secure API Requests
- Token Based Authentication

---

# 📈 Future Improvements

- Email Verification
- Forgot Password
- Reset Password
- User Profile
- Settings Page
- Dark Mode
- Two-Factor Authentication (2FA)
- Admin Panel
- User Management
- Activity Logs

---

# 📦 Deployment

Frontend

- Vercel

Backend

- Render / Railway

Database

- MongoDB Atlas

---

# 👩‍💻 Developed By

**Preeti Dhanawade**

Diploma Student (Information Technology)

Full Stack Web Development Intern

---

## 📫 Connect With Me - <br>💼 **LinkedIn:** [Preeti Dhanawade](https://www.linkedin.com/in/preeti-dhanawade-212b612a3/) <br>💻 **GitHub:** [dhanawadepreeti97-creator](https://github.com/dhanawadepreeti97-creator) <br>📧 **Email:** <dhanawadepreeti97@gmail.com>

---

# ⭐ Support

If you found this project helpful,

⭐ Star this repository

🍴 Fork it

📢 Share it with others

---

## 📜 License

This project is licensed under the MIT License.

---

## ❤️ Thank You

Thank you for visiting **AuthSphere**!

If you like this project, don't forget to ⭐ star the repository.
