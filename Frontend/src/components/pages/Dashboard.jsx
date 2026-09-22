import { IndianRupee, TrendingDown, ReceiptText, Wallet } from "lucide-react"
import Sidebar from "../layout/Sidebar"
import Topbar from "../layout/Topbar"
import StatCard from "../dashboard/StatCard"
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
                    <section className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
                        <StatCard
                            title='Total Balance'
                            value='₹48,250'
                            subtitle='Available balance'
                            icon={<Wallet size={18}/>}
                            accent='bg-emerald-500/10 text-emerald-400'
                        />

                        <StatCard
                            title='Total Expenses'
                            value='₹12,480'
                            subtitle='This month'
                            icon={<TrendingDown size={18}/>}
                            accent='bg-red-500/10 text-red-400'
                        />

                        <StatCard
                            title='Transactions'
                            value='38'
                            subtitle='This month'
                            icon={<ReceiptText size={18}/>}
                            accent='bg-blue-500/10 text-blue-400'
                        />

                        <StatCard
                            title='Average Expense'
                            value='₹328'
                            subtitle='Per transaction'
                            icon={<IndianRupee size={18}/>}
                            accent='bg-purple-500/10 text-purple-400'
                        />
                    </section>

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