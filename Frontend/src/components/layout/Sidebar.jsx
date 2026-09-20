import { LayoutDashboard, Receipt, LogOut, WalletCards } from "lucide-react"

const Sidebar = () => {
    return (
        <aside className='hidden lg:flex w-64 min-h-screen bg-[#0d0d0f] border-r border-white/10 flex-col fixed left-0 top-0'>
            <div className='h-20 px-6 flex items-center gap-3 border-b border-white/10'>
                <div className='w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center'>
                    <WalletCards size={20} className='text-black'/>
                </div>
                <div>
                    <h1 className='text-white font-semibold'>ExpenseFlow</h1>
                    <p className='text-xs text-zinc-500'>Personal finance</p>
                </div>
            </div>

            <nav className='flex-1 p-4 space-y-2'>
                <button className='w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 text-white text-sm'>
                    <LayoutDashboard size={18}/>
                    Dashboard
                </button>

                <button className='w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-white/5 hover:text-white text-sm'>
                    <Receipt size={18}/>
                    Expenses
                </button>
            </nav>

            <div className='p-4 border-t border-white/10'>
                <button className='w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-red-500/10 hover:text-red-400 text-sm'>
                    <LogOut size={18}/>
                    Logout
                </button>
            </div>
        </aside>
    )
}

export default Sidebar