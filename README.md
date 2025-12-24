🎮 GlowFox

GlowFox is a game development studio and collaboration platform designed for students, indie developers, and game enthusiasts to build, explore, and showcase games together. The platform focuses on community-driven development, mentorship, and next-generation game experiences.

🚀 Features

🎯 Explore indie and student-built games

🛠️ Create and publish games with image uploads

🔐 Authentication system (Sign Up / Sign In)

🧩 Dashboard for creators

🌐 Modern frontend built with React + Vite

⚙️ Scalable backend with Express & MongoDB

🏗️ Tech Stack
Frontend

React

Vite

Tailwind CSS

React Router

Backend

Node.js

Express.js

MongoDB + Mongoose

Multer (image uploads)

dotenv

📁 Project Structure
GlowFox/
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   └── components/
│   └── vite.config.js
│
├── Backend/                # Backend (Express + MongoDB)
│   ├── controllers/
│   ├── models/
│   ├── routers/
│   ├── public/
│   │   └── images/
│   └── index.js
│
├── .gitignore
├── README.md

🔧 Environment Variables
Backend (Backend/.env)
PORT=5001
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5001

Frontend (client/.env)
VITE_API_URL=http://localhost:5001


⚠️ .env files are intentionally ignored from GitHub for security.

▶️ Getting Started
1️⃣ Clone the Repository
git clone https://github.com/SumantBobade/GlowFox.git
cd GlowFox

2️⃣ Install Dependencies
Backend
cd Backend
npm install

Frontend
cd client
npm install

3️⃣ Run the Application
Start Backend
cd Backend
npm run dev


Backend runs on:
http://localhost:5001

Start Frontend
cd client
npm run dev


Frontend runs on:
http://localhost:5173

🖼️ Image Uploads

Images are uploaded using Multer

Stored in Backend/public/images

Served via:

http://localhost:5001/images/<filename>

🔐 License

© 2025 GlowFox.
All rights reserved.

This project is currently proprietary. Unauthorized copying, modification, or distribution is prohibited.

🌱 Roadmap

 Game categories & tags

 User profiles

 Community reviews & ratings

 Mentorship system

 Cloud image storage (S3 / Cloudinary)

🤝 Contributing

Contributions will be opened in future iterations.
For now, GlowFox is under active development.

📬 Contact

Developer: Sumant Bobade
GitHub: https://github.com/SumantBobade
