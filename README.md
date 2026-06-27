# 🚀 ResumePilot AI

<p align="center">

<img src="frontend/public/logo.png" width="120" />

</p>

<h3 align="center">
AI-Powered Resume Analyzer using Google Gemini
</h3>

<p align="center">

Optimize. Analyze. Get Hired.

</p>

---

## 📌 Overview

ResumePilot AI is a full-stack AI-powered Resume Analyzer that helps students and job seekers improve their resumes using Google's Gemini AI.

Users can upload a PDF resume, optionally provide a Job Description, and receive detailed ATS analysis including recruiter feedback, missing skills, resume improvements, interview questions, and personalized suggestions.

---

## ✨ Features

* 🤖 AI Resume Analysis using Google Gemini
* 📄 PDF Resume Upload
* 📊 ATS Score Evaluation
* 🎯 Job Description Matching
* 💪 Strength & Weakness Analysis
* 🔍 Missing Skills & Keywords Detection
* 🚀 Resume Improvement Suggestions
* 💼 Recruiter Feedback
* ❓ Personalized Interview Questions
* 📚 Resume History
* 🔐 JWT Authentication
* 📱 Fully Responsive UI

---

# 📷 Screenshots

## Landing Page

> Add Screenshot

---

## Dashboard

> Add Screenshot

---

## Upload Resume

> Add Screenshot

---

## AI Analysis

> Add Screenshot

---

## Resume History

> Add Screenshot

---

# 🏗 Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router
* Axios
* React Hook Form
* React Hot Toast
* Lucide React
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer
* pdf-parse

### AI

* Google Gemini 2.5 Flash API

### Database

* MongoDB Atlas

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/ResumePilot-AI.git
```

Frontend

```bash
cd frontend

npm install

npm run dev
```

Backend

```bash
cd backend

npm install

npm run dev
```

---

# 🔑 Environment Variables

Backend `.env`

```env
PORT=

MONGODB_URI=

JWT_SECRET=

GEMINI_API_KEY=
```

---

# 🧠 How It Works

1. User uploads a PDF Resume.
2. Resume text is extracted using **pdf-parse**.
3. Resume + Job Description are converted into a structured prompt.
4. Google Gemini analyzes the resume.
5. AI returns structured JSON.
6. Analysis is stored in MongoDB.
7. Dashboard displays ATS score and detailed insights.

---

# 📂 Project Structure

```
ResumePilot-AI/

├── frontend/

│   ├── public/

│   ├── src/

│   │   ├── components/

│   │   ├── pages/

│   │   ├── layouts/

│   │   ├── hooks/

│   │   ├── services/

│   │   └── context/

│

├── backend/

│   ├── config/

│   ├── controllers/

│   ├── middleware/

│   ├── models/

│   ├── routes/

│   ├── services/

│   ├── utils/

│   └── server.js

│

└── README.md
```

---

# 🔐 Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Secure Resume History

---

# 📚 API Endpoints

## Authentication

```
POST /api/auth/register

POST /api/auth/login
```

## Resume

```
POST /api/resume/analyze

GET /api/resume/history

GET /api/resume/:id
```

---

# 🚀 Future Improvements

* Resume Builder
* Cover Letter Generator
* Resume Comparison
* Resume Versioning
* Resume Templates
* AI Career Roadmap
* Job Recommendation Engine
* Export Analysis as PDF
* Dark Mode
* Admin Dashboard

---

# 👨‍💻 Author

**Nitish Bairwa**

B.Tech Mathematics & Computing

Indian Institute of Technology Goa

GitHub

https://github.com/Nitish519

LinkedIn

https://www.linkedin.com/in/nitish-kumar-7a3102313

---

# ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

It motivates me to continue building high-quality open-source projects.
