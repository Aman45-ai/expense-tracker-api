import ExpenseCard from "./ExpenseCard"

const ExpenseList = () => {
    return (
        <div className='space-y-3'>
            <ExpenseCard title='Swiggy Order' category='Food' date='Today' amount='420'/>
            <ExpenseCard title='Metro Recharge' category='Transport' date='Yesterday' amount='300'/>
            <ExpenseCard title='Amazon Purchase' category='Shopping' date='Sep 17' amount='1,299'/>
            <ExpenseCard title='Netflix' category='Entertainment' date='Sep 15' amount='649'/>
        </div>
    )
}

export default ExpenseList