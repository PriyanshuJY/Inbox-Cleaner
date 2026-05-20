# 🚀 Inbox Cleaner

A modern AI-inspired Gmail Inbox Management Dashboard built using **React + FastAPI + Gmail API**.

Inbox Cleaner helps users:

* Organize Gmail inboxes
* Filter emails by category
* Archive unnecessary emails
* Delete unwanted emails
* Bulk clean promotions/newsletters
* Search emails instantly
* View inbox analytics in a modern dashboard

---

# ✨ Features

## 🔐 Gmail OAuth Authentication

Secure Google OAuth login using Gmail API.

## 📬 Smart Email Categorization

Automatically categorizes emails into:

* Job Alerts
* Promotions
* Newsletter
* Professional
* General

## 🧹 Inbox Cleaning

Users can:

* Delete emails
* Archive emails
* Bulk delete promotions
* Bulk archive newsletters

## 🔍 Live Search

Instantly search emails by:

* Subject
* Sender
* Snippet

## 📊 Dashboard Analytics

Modern stats dashboard showing:

* Total Emails
* Job Alerts
* Promotions
* Newsletters

## 🎨 Premium UI

* Modern dark dashboard
* Responsive layout
* Animated cards
* Toast notifications
* Empty states
* Smooth interactions

---

# 🛠️ Tech Stack

## Frontend

* React
* Vite
* CSS3
* React Hot Toast

## Backend

* FastAPI
* Python
* Gmail API
* Google OAuth
* Uvicorn

---

# 📂 Project Structure

```bash
InboxCleaner/
│
├── backend/
│   ├── auth.py
│   ├── main.py
│   ├── .env
│   └── venv/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/PriyanshuJY/Inbox-Cleaner.git
```

---

# 🔧 Backend Setup

## Navigate to backend

```bash
cd backend
```

## Create virtual environment

```bash
python -m venv venv
```

## Activate virtual environment

### Windows

```bash
.\venv\Scripts\activate
```

### Mac/Linux

```bash
source venv/bin/activate
```

## Install dependencies

```bash
pip install fastapi uvicorn python-dotenv google-auth google-auth-oauthlib google-auth-httplib2 google-api-python-client
```

---

# 🔐 Google OAuth Setup

## Create OAuth Credentials

Go to:

[https://console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)

### Steps

1. Create a new project
2. Enable Gmail API
3. Create OAuth Client ID
4. Choose:

```plaintext
Web Application
```

5. Add redirect URI:

```plaintext
http://localhost:8000/auth/callback
```

---

# 📄 Create `.env`

Inside `backend/` create:

```env
CLIENT_ID=YOUR_CLIENT_ID
CLIENT_SECRET=YOUR_CLIENT_SECRET
REDIRECT_URI=http://localhost:8000/auth/callback
```

---

# ▶️ Run Backend

```bash
python -m uvicorn main:app --reload
```

Backend runs on:

```plaintext
http://127.0.0.1:8000
```

---

# 💻 Frontend Setup

## Navigate to frontend

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Start frontend

```bash
npm run dev
```

Frontend runs on:

```plaintext
http://localhost:5173
```

---

# 📸 Application Features

## 🏠 Dashboard

* Sidebar navigation
* Search bar
* Analytics cards
* Modern dark theme

## 📧 Email Management

* Archive emails
* Delete emails
* Bulk clean inbox

## ⚡ User Experience

* Loading states
* Toast notifications
* Empty inbox state
* Smooth animations

---

# 🔮 Future Improvements

* AI Email Summarization
* Smart Priority Detection
* Spam Detection
* Drag & Drop Email Actions
* Mobile Responsive Sidebar
* AI Cleanup Suggestions
* One-click Smart Inbox Cleanup

---

# 📌 API Endpoints

## Authentication

```http
GET /auth/login
```

## OAuth Callback

```http
GET /auth/callback
```

## Delete Email

```http
DELETE /auth/delete/{message_id}
```

## Archive Email

```http
POST /auth/archive/{message_id}
```

---

# 🧠 What I Learned

This project helped me learn:

* OAuth Authentication
* Gmail API Integration
* FastAPI Backend Development
* React State Management
* API Integration
* Modern Dashboard Design
* Full Stack Development
* Git & GitHub Workflow
* Environment Variable Security
* Production-style UI/UX

---

# 👨‍💻 Author

### Priyanshu Yawalkar

GitHub:
[https://github.com/PriyanshuJY](https://github.com/PriyanshuJY)

---

# ⭐ Support

If you like this project:

* Star the repository
* Fork the project
* Share feedback

---

# 🚀 Inbox Cleaner

Transform your cluttered inbox into a clean, organized productivity space.
