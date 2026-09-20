import { Plus } from "lucide-react"

const ExpenseForm = () => {
    return (
        <div className='bg-[#111113] border border-white/10 rounded-2xl p-6'>
            <div className='mb-6'>
                <h3 className='text-lg font-semibold text-white'>Add Expense</h3>
                <p className='text-sm text-zinc-500 mt-1'>Record a new expense</p>
            </div>

            <div className='space-y-4'>
                <div>
                    <label className='text-xs text-zinc-400'>Title</label>
                    <input
                        type='text'
                        placeholder='e.g. Grocery shopping'
                        className='mt-2 w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-emerald-500/50'
                    />
                </div>

                <div>
                    <label className='text-xs text-zinc-400'>Amount</label>
                    <input
                        type='number'
                        placeholder='₹ 0.00'
                        className='mt-2 w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-emerald-500/50'
                    />
                </div>

                <button className='w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm py-3 rounded-xl transition'>
                    <Plus size={18}/>
                    Add Expense
                </button>
            </div>
        </div>
    )
}

export default ExpenseForm