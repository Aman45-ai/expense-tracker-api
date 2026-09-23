
import Sidebar from "../layout/Sidebar"
import Topbar from "../layout/Topbar"
import ExpenseList from "../expense/ExpenseList"
import ExpenseForm from "../expense/ExpenseForm"
import { useEffect, useState } from "react"
import expenseapi from "../../services/expense.service"


const Dashboard = () => {
    const [expenses,setExpenses] = useState([])
    const fetchExpense = async()=>{
            const response = await expenseapi.getExpense()
            setExpenses(response.data)
        }
    
    useEffect(()=>{
        fetchExpense()
    },[])
    return (
        <div className='min-h-screen bg-[#09090b] text-white'>
            <Sidebar />

            <main className='lg:ml-64'>
                <Topbar />

                <div className='p-6 lg:p-8 space-y-8'>

                    <section className='grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6'>
                        <div className='bg-[#111113] border border-white/10 rounded-2xl p-6'>
                            <div className='flex items-center justify-between mb-6'>
                                <div>
                                    <h3 className='text-lg font-semibold'>Expenses</h3>
                                    <p className='text-sm text-zinc-500 mt-1'>Your transactions</p>
                                </div>
                            </div>

                            <ExpenseList expenses={expenses} fetchExpense={fetchExpense}/>
                        </div>

                        <ExpenseForm fetchExpense={fetchExpense}/>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default Dashboard