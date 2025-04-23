# health-tracker
A full-stack health tracking web app using Angular (frontend), Flask (backend), and Docker. Users can add temperature entries and see live updates in a table. Includes NGINX proxy setup and full Docker Compose support for easy deployment.

# 🧪 Health Tracker

This is a simple health tracking web app built with:
- **Angular** (frontend)
- **Flask** (backend)
- **Docker + NGINX** for deployment

Users can add people's names and temperature readings and see them live in a table.

---

## 🚀 How to Run It (Simple Steps)

### 🐳 Run it with Docker (Recommended)

Make sure you have **Docker Desktop** installed.

1. Open terminal in the project folder
2. Run these commands:

```bash
docker compose build --no-cache
docker compose up
```

3. Open your browser:
```text
http://localhost
```
✅ The app will load.

4. The backend API is available at:
```text
http://localhost/api/entries
```

---

### 🧪 Run it Without Docker (Development Mode)

#### ▶️ Start the Flask Backend
```bash
cd backend
pip install flask flask-cors
python app.py
```

#### ▶️ Start the Angular Frontend
```bash
cd frontend
npm install
ng serve
```

Then open:
```text
http://localhost:4200
```

> Make sure `data.service.ts` in Angular uses this API URL:
```ts
private API_URL = 'http://localhost:5000/api';
```

---

## 📁 Project Structure
```
health-tracker/
├── backend/      # Flask backend (API)
├── frontend/     # Angular frontend + NGINX config
├── docker-compose.yml
```

---

## 💡 What’s Next?
- Add a real database (PostgreSQL or SQLite)
- Add login/authentication
- Deploy to cloud (Render, Heroku, etc.)

---

Made by **Keyshid Salehi**, 2025

