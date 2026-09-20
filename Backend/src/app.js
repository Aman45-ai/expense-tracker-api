import express from 'express'
import connectDB from './db/database.js'
import expenseRouter from './routes/expense.route.js'
import authRouter from './routes/auth.route.js'
import cors from 'cors'

const app = express()

app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(express.json())
app.use('/',expenseRouter)
app.use('/auth',authRouter)

connectDB()

export default app

