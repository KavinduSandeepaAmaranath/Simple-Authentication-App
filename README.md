# 🔐 Simple Authentication System (MERN Stack)

A full-stack authentication system built using **React, Node.js, Express, and MongoDB**.  
This project includes user registration, login, JWT authentication, and protected backend APIs.

---

## ✨ Features

- User Registration
- User Login
- Frontend built with React (Vite)
- REST API backend with Express
- MongoDB database integration
- Clean project structure (Frontend + Backend separation)

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Axios
- React Router DOM
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## ⚙️ Setup Backend

### 1️⃣ Navigate to backend folder

```bash
cd server
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create .env file
- Create a .env file inside the server/ folder and add:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Start backend server
```bash
node server.js
```
- Backend runs on:
  ```bash
  http://localhost:5000
  ```

---

## 🔗 API Endpoints

### Auth Routes

| Method | Endpoint        | Description        |
|--------|----------------|--------------------|
| POST   | /api/register  | Register new user  |
| POST   | /api/login     | Login user         |

---

# 🚀 Future Improvements

- Email verification system
- Password reset functionality
- Role-based authentication (Admin/User)
- Auth login (Google, GitHub)
- Refresh token implementation
- Improved UI/UX design
- Input validation and error handling improvement

---
