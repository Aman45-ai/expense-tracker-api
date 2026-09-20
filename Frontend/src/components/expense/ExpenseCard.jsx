import { ArrowUpRight, MoreHorizontal } from "lucide-react"

const ExpenseCard = ({ title, category, date, amount }) => {
    return (
        <div className='flex items-center justify-between p-4 rounded-xl border border-white/10 bg-[#111113] hover:bg-white/3 transition'>
            <div className='flex items-center gap-4'>
                <div className='w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center'>
                    <ArrowUpRight size={18} className='text-zinc-400'/>
                </div>

                <div>
                    <h4 className='text-sm font-medium text-white'>{title}</h4>
                    <p className='text-xs text-zinc-500 mt-1'>{category} · {date}</p>
                </div>
            </div>

            <div className='flex items-center gap-4'>
                <p className='text-sm font-semibold text-white'>₹{amount}</p>

                <button className='text-zinc-500 hover:text-white'>
                    <MoreHorizontal size={18}/>
                </button>
            </div>
        </div>
    )
}

export default ExpenseCard