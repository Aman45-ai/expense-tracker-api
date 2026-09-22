
import ExpenseCard from "./ExpenseCard"

const ExpenseList = ({expenses,fetchExpense}) => {
    return (
        <div className='space-y-3'>
            {expenses.map((values)=>{
                return(
                    <ExpenseCard  key={values._id}  _id={values._id} title={values.title} amount={values.amount} fetchExpense={fetchExpense}/>
                )
            })}
        </div>
    )
}

export default ExpenseList