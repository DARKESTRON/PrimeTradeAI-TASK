# Deployment Guide

## 1. Backend Deployment (Vercel)

Deploy the `backend` folder as a separate project.

### Environment Variables
You need to set the following Environment Variables in Vercel for the Backend project:

| Variable | Description | Example Value |
|----------|-------------|---------------|
| `MONGO_URI` | Connection string for your MongoDB database (e.g., MongoDB Atlas). | `mongodb+srv://user:pass@cluster.mongodb.net/dbname` |
| `JWT_SECRET` | A secret key used to sign authentication tokens. | `mysecretkey123` |

### Steps
1. Import the repository in Vercel.
2. Set **Root Directory** to `backend`.
3. Add the Environment Variables listed above.
4. Deploy.
5. Copy the **Deployment URL** (e.g., `https://primetrade-backend.vercel.app`).

---

## 2. Frontend Deployment (Vercel)

Deploy the `frontend` folder as a separate project.

### Environment Variables
You need to set the following Environment Variable in Vercel for the Frontend project:

| Variable | Description | Example Value |
|----------|-------------|---------------|
| `VITE_API_URL` | The URL of your deployed Backend API. | `https://primetrade-backend.vercel.app/api` |

### Steps
1. Import the repository in Vercel.
2. Set **Root Directory** to `frontend`.
3. Add the Environment Variable `VITE_API_URL` with your backend URL.
4. Deploy.

---

## 3. MongoDB Atlas Setup (If needed)
1. Create a free account on [MongoDB Atlas](https://www.mongodb.com/atlas).
2. Create a new Cluster.
3. Create a Database User (Username/Password).
4. Allow Network Access (IP Address `0.0.0.0/0` to allow Vercel to connect).
5. Get the Connection String (Driver: Node.js) and use it as `MONGO_URI`.
