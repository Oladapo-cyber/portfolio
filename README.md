# SaaS App - MERN Stack

A modern, production-ready SaaS (Software as a Service) application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Tailwind CSS.

## ✨ Features

### Frontend
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🔐 User authentication (Login/Register)
- 📊 Dashboard with analytics
- 📁 Project management
- ⚙️ User settings & profile management
- 💳 Subscription/Pricing tiers
- 🌐 Public landing page

### Backend
- 🔒 JWT-based authentication
- 👤 User management
- 📧 Express-validator for input validation
- 🗄️ MongoDB with Mongoose ODM
- 🛡️ Protected API routes
- 💰 Subscription management

## 🛠️ Tech Stack

### Frontend
- React 19
- React Router v6
- Tailwind CSS 4
- Axios
- React Icons
- Vite

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or MongoDB Atlas)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install frontend dependencies
```bash
npm install
```

3. Install backend dependencies
```bash
npm run server:install
# or
cd server && npm install
```

4. Configure environment variables

Create a `.env` file in the `server` directory:
```env
MONGO_URI=mongodb://localhost:27017/saas-app
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=30d
PORT=5000
NODE_ENV=development
```

Create a `.env` file in the root directory (optional):
```env
VITE_API_URL=http://localhost:5000/api
```

5. Start the development servers

Frontend (in root directory):
```bash
npm run dev
```

Backend (in another terminal):
```bash
npm run server
# or
cd server && npm run dev
```

## 📁 Project Structure

```
├── public/                 # Static assets
├── server/                 # Backend server
│   ├── config/            # Database configuration
│   ├── middleware/        # Express middleware
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   └── index.js           # Server entry point
├── src/                    # Frontend source
│   ├── components/        # Reusable components
│   ├── context/           # React context
│   ├── pages/             # Page components
│   ├── services/          # API services
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies
```

## 📄 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)
- `PUT /api/auth/profile` - Update profile (protected)
- `PUT /api/auth/password` - Update password (protected)

### Subscription
- `GET /api/subscription/plans` - Get available plans
- `GET /api/subscription/current` - Get current subscription (protected)
- `PUT /api/subscription/upgrade` - Upgrade plan (protected)

## 🔐 Subscription Plans

| Plan | Price | Features |
|------|-------|----------|
| Free | $0/mo | 3 projects, basic analytics, 1GB storage |
| Starter | $9/mo | 10 projects, advanced analytics, 10GB storage |
| Professional | $29/mo | Unlimited projects, API access, team collaboration |
| Enterprise | $99/mo | Everything + dedicated support, custom integrations |

## 📝 License

MIT License
