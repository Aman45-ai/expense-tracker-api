import { Bell, Search } from "lucide-react"

const Topbar = () => {
    return (
        <header className='h-20 border-b border-white/10 bg-[#09090b]/90 backdrop-blur-xl flex items-center justify-between px-6 lg:px-8'>
            <div>
                <p className='text-xs text-zinc-500'>Welcome back</p>
                <h2 className='text-lg font-semibold text-white'>Expense Dashboard</h2>
            </div>

            <div className='flex items-center gap-3'>
                <button className='w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5'>
                    <Search size={18}/>
                </button>

                <button className='w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5'>
                    <Bell size={18}/>
                </button>

                <div className='w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-black font-semibold text-sm'>
                    A
                </div>
            </div>
        </header>
    )
}

export default Topbar