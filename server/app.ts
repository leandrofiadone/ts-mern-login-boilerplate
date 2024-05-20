
import express from 'express'
import authRoutes from './routes/auth.routes'
import cors from 'cors'


const app = express()

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://ts-mern-login-boilerplate-1.onrender.com",
    "https://ts-mern-login-boilerplate.vercel.app"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}

app.use(cors(corsOptions))


app.use(authRoutes)

export default app