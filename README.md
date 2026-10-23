# Gourav Biswas Portfolio

A modern full-stack portfolio website for Gourav Biswas, built with React + Vite on the frontend and FastAPI + SQLAlchemy on the backend.

## Features
- Five-page portfolio website: Home, About, Skills, Projects, Contact
- Responsive design with dark/light mode and premium styling
- Full-stack API using FastAPI and SQLite
- Contact form saved to database with validation
- Editable placeholders for profile photo, email, social links, and resume
- Ready for future admin dashboard, auth, PostgreSQL, and deployment

## Project Structure
- `frontend/` — React application
- `backend/` — FastAPI backend and database

## Local Setup

### 1) Frontend
```bash
cd frontend
npm install
npm run dev
```

### 2) Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
alembic upgrade head
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## Default local URLs
- Frontend: http://localhost:5173
- Backend API: http://localhost:8000/api
- Health check: http://localhost:8000/api/health

## Notes
- Update profile details in the frontend and backend configuration as needed.
- The app uses SQLite locally and is structured to support PostgreSQL in the future.
- Contact submissions are stored in the `contact_messages` table.
