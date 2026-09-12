import express from 'express'
import connectDB from './db/database.js'
import expenseRouter from './routes/expense.route.js'

const app = express()

app.use(express.json())

app.use('/',expenseRouter)

connectDB()

export default app

