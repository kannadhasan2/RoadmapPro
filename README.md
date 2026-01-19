# 🚀 RoadmapPro — AI-Powered Learning Platform

<div align="center">

![RoadmapPro Banner](https://img.shields.io/badge/RoadmapPro-AI%20Learning%20Platform-FF6B35?style=for-the-badge&logo=react&logoColor=white)

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://postgresql.org/)
[![Groq](https://img.shields.io/badge/Groq-LLM-FF6B35?style=flat-square)](https://groq.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**Transform how you learn with AI-generated roadmaps, personalized courses, and an intelligent tutor.**

[Live Demo](https://roadmap-pro.vercel.app/) · [Features](#-features) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started)

</div>

---

## 📖 Overview

**RoadmapPro** is a full-stack AI-powered learning platform that revolutionizes education by generating personalized learning paths, interactive courses, and providing an AI tutor for real-time assistance. Built with modern technologies and designed for scale.

### 🎯 The Problem
- Traditional learning platforms offer one-size-fits-all content
- Finding quality resources for specific career paths is time-consuming
- Lack of structured guidance for self-learners

### 💡 The Solution
RoadmapPro uses **Groq's ultra-fast LLM inference** to generate:
- **Custom learning roadmaps** tailored to any tech role
- **Structured courses** with modules and lessons
- **AI tutoring** with context-aware responses
- **Community features** for collaborative learning

---

## ✨ Features

### 🗺️ AI Roadmap Generator
Generate comprehensive, structured learning paths for any tech role:
- Frontend Developer, Backend Developer, Data Scientist, DevOps, and more
- Visual roadmap with stages and dependencies
- Adjust detail level: Quick, Standard, or Comprehensive

### 📚 AI Course Generator
Create structured courses on any topic:
- Auto-generated modules and lessons
- Estimated duration for each section
- Curated resource recommendations

### 🤖 AI Tutor
Get instant help with an intelligent tutoring system:
- Context-aware responses
- Markdown-formatted explanations
- Real-time chat interface

### 📹 Video Learning Feed
- Upload educational content
- AI-powered video transcription (Groq Whisper)
- Auto-generated summaries, quizzes, and flashcards

### 👥 Learning Communities
- Create and join topic-based communities
- Real-time community chat
- Share knowledge with peers

### 📊 Personal Dashboard
- Track learning progress and streaks
- View bookmarked content
- Monitor AI usage statistics

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 18** | UI library with concurrent features |
| **Vite** | Next-gen build tool |
| **TailwindCSS 3** | Utility-first styling |
| **Zustand** | Lightweight state management |
| **React Router 6** | Client-side routing |
| **Framer Motion** | Smooth animations |
| **ReactFlow** | Interactive roadmap visualization |
| **Chart.js** | Progress analytics |

### Backend
| Technology | Purpose |
|------------|---------|
| **Node.js 20** | Runtime environment |
| **Express.js** | REST API framework |
| **PostgreSQL** | Primary database (Supabase) |
| **JWT** | Secure authentication |
| **Groq SDK** | LLM inference (Llama 3.3 70B) |
| **Google Gemini** | Fallback AI provider |
| **Cloudinary** | Video storage & delivery |
| **Node-Cache** | Response caching |

### Infrastructure
| Service | Purpose |
|---------|---------|
| **Supabase** | Managed PostgreSQL + Auth |
| **Cloudinary** | Media CDN |
| **Vercel/Render** | Deployment |

---

## 📁 Project Structure

```
RoadmapPro/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── ai/           # AI feature components
│   │   │   ├── auth/         # Authentication components
│   │   │   ├── common/       # Shared components (Navbar, etc.)
│   │   │   ├── community/    # Community features
│   │   │   ├── feed/         # Video feed components
│   │   │   └── ui/           # Design system components
│   │   ├── pages/            # Route pages (18 pages)
│   │   ├── store/            # Zustand state stores
│   │   ├── utils/            # API client, helpers
│   │   └── styles/           # CSS & animations
│   └── package.json
│
├── backend/                  # Express API server
│   ├── src/
│   │   ├── config/           # Environment, database config
│   │   ├── controllers/      # Route handlers
│   │   ├── middleware/       # Auth, upload, rate limiting
│   │   ├── models/           # Database queries
│   │   ├── routes/           # API route definitions
│   │   ├── services/         # AI service, video processing
│   │   └── utils/            # JWT, bcrypt helpers
│   └── package.json
│
├── supabase/
│   └── migrations/           # Database schema (8 migrations)
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm 9+ or yarn
- PostgreSQL 15+ (or Supabase account)

### 1. Clone the repository
```bash
git clone https://github.com/kannadhasan2/RoadmapPro
cd RoadmapPro
```

### 2. Backend Setup
```bash
cd backend
npm install
cp env.example .env
```

Configure `.env`:
```env
# Database (Supabase)
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT].supabase.co:5432/postgres?sslmode=require
# Important: Don't forget to add `?sslmode=require` at end of your DATABASE_URL

# Authentication
JWT_SECRET=your-super-secret-key-min-32-chars
JWT_EXPIRE=7d

# AI Providers
GROQ_API_KEY=gsk_your_groq_key        # Primary (get from console.groq.com)
GEMINI_API_KEY=your_gemini_key        # Fallback (optional but recommended)

# Media Storage
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_API_key
CLOUDINARY_API_SECRET=your_API_secret

# Server
PORT=5000
FRONTEND_URL=http://localhost:5173
```

Start the backend:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 4. Database Setup
Run migrations in order via Supabase SQL Editor:
1. `001_init.sql` — Core tables
2. `002_add_post_transcript.sql` — Video transcription
3. `003_learning_paths.sql` — Learning paths
4. `004_learning_path_resources.sql` — Resource links
5. `005_community_chat.sql` — Chat feature
6. `006_roadmap_persistence_fixed.sql` — Saved roadmaps
7. `007_enable_rls.sql` — Row Level Security
8. `008_fix_function_search_path.sql` — Security fix

---

## 🔌 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Create account |
| POST | `/api/auth/login` | User login |
| GET | `/api/auth/me` | Get current user |

### AI Features
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/paths/ai-roadmap` | Generate learning roadmap |
| POST | `/api/paths/ai-course` | Generate course outline |
| POST | `/api/paths/ai-tutor` | Chat with AI tutor |
| GET | `/api/paths/ai-usage/stats` | Get usage statistics |

### Content
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/posts` | List feed posts |
| POST | `/api/posts` | Upload video |
| GET | `/api/posts/:id/ai-summary` | Get AI summary |
| GET | `/api/posts/:id/ai-quiz` | Generate quiz |
| GET | `/api/posts/:id/ai-flashcards` | Generate flashcards |

### Communities
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/communities` | List communities |
| POST | `/api/communities/:id/join` | Join community |
| GET | `/api/communities/:id/messages` | Get chat messages |

---

## 🎨 Key Technical Highlights

### 🧠 AI Architecture
- **Multi-provider fallback**: Groq (primary) → Gemini (backup)
- **Smart rate limiting**: 500 RPM with automatic throttling
- **Response caching**: 24-hour TTL to minimize API costs
- **Token tracking**: Real-time usage monitoring & daily limits

### ⚡ Performance Optimizations
- **Lazy loading**: All pages code-split with React.lazy()
- **API response caching**: Reduces redundant AI calls by 80%
- **Optimistic UI updates**: Instant feedback for user actions
- **Connection pooling**: Efficient database connections

### 🔒 Security
- **JWT authentication** with secure HTTP-only cookies
- **Row Level Security (RLS)** on Supabase tables
- **Input validation** with express-validator
- **Rate limiting** on all API endpoints
- **CORS** configured for frontend origin only

---

## 📊 Performance Metrics

| Metric | Value |
|--------|-------|
| **Lighthouse Score** | 95+ |
| **First Contentful Paint** | < 1s |
| **Largest Contentful Paint**| < 1s |
| **AI Response Time** | < 2s (Groq Llama 3.3) |
| **Bundle Size** | < 500KB gzipped |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Kannadhasan S**

[![GitHub](https://img.shields.io/badge/GitHub-kannadhasan-s?style=flat-square&logo=github)](https://github.com/kannadhasan2)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/kannadhasan-s/)


---

<div align="center">

**⭐ Star this repo if you found it helpful!**

</div>
