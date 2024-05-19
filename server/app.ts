
import express from 'express'
import authRoutes from './routes/auth.routes'
import cors from 'cors'


const app = express()

app.use(cors({
    credentials: true
}))
app.use(authRoutes)

export default app