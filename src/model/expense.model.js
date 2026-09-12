import mongoose from "mongoose"

const expenseSchema = new mongoose.Schema({
    amount:{
        type: Number,
        required: true,
        validate:{
            validator:(value) => {
                return value>0
            },
            message:"Amont must be greater than 0"
        }
    },
    title:{
        type: String,
        required: true,
    }
})

const Expense = mongoose.model('Expense', expenseSchema)

export default Expense