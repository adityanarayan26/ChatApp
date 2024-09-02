import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import messageRoutes from './routes/message.js';
import connectDB from './db/dbconnect.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import {app,server} from './socket/socket.js'


const PORT = process.env.PORT || 8000;
dotenv.config()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true // Allow credentials (cookies)
}));
app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api', userRoutes)



server.listen(PORT, () => {
    connectDB()
    console.log(`server running on port ${PORT}`);
})
