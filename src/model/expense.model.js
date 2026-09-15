import mongoose from "mongoose"

const expenseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"],
        validate: {
            validator: (value) => {
                return value > 0
            },
            message: "Amont must be greater than 0"
        }
    },
    title: {
        type: String,
        required: [true, "Title is required"],
    },

})

const Expense = mongoose.model('Expense', expenseSchema)

export default Expense