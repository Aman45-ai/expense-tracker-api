
import Expense from '../model/expense.model.js'


const expenseCreate = async (req, res) => {
    try {
        const { amount, title } = req.body
        const user = req.userId

        const userExpense = await Expense.create({
            user,
            amount,
            title
        })
        res.status(201).send(userExpense)

    } catch (error) {
        console.log("Error in expense creation", error)
        res.status(500).send("Internal Server Error")
    }
}

const getExpense = async(req, res)=>{
    try{
        const allExpense = await Expense.find({user:req.userId})
        res.status(200).send(allExpense)
    }catch(error){
        console.log("Error in getting expense", error)
        res.status(500).send("Internal Server Error")
    }
}

const putExpense = async(req, res)=>{
    try{
        const id = req.params.id
        const {amount, title} = req.body
        const updatedData = {
            amount,
            title
        }    
        const updatedExpense = await Expense.findOneAndUpdate({_id:id,user:req.userId}, updatedData,
            {new:true, runValidators:true}
        )
        if(updatedExpense===null){
            res.status(404).send("Expense not Found")
        }else{
            res.status(200).send(updatedExpense)
        }
        

    }catch(error){
        console.log("Error in updating the expense", error)
        res.status(500).send("Internal Server Error")
    }
}

const patchExpense = async(req, res)=>{
    try{
        const id = req.params.id
        const {amount,title} = req.body
        const updatedData = {}
        if("amount" in req.body){
            updatedData.amount = amount
        }
        if("title" in req.body){
            updatedData.title = title
        }
        const updateExpense = await Expense.findOneAndUpdate({_id:id, user:req.userId}, updatedData, {new:true,runValidators:true})
        if(updateExpense===null){
            res.status(404).send("Expense not Found")
        }else{
            res.status(200).send(updateExpense)
        }

    }catch(error){
        console.log("Error in updating the expense", error)
        res.status(500).send("Internal Server Error")
    }
}

const deleteExpense = async(req,res) =>{
    try{
        const id = req.params.id
        const deletedExpense = await Expense.findOneAndDelete({_id:id,user:req.userId})
        if(deletedExpense===null){
            res.status(404).send("Expense not Found")
        }else{
            res.status(200).send(deletedExpense)
        }

    }catch(error){
        console.log("Error in deleting the expense", error)
        res.status(500).send("Internal Server Error")
    }
    
}


export default {expenseCreate ,getExpense, putExpense, patchExpense, deleteExpense}