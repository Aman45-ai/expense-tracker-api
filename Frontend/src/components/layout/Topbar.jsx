
const Topbar = () => {
    return (
        <header className='h-20 border-b border-white/10 bg-[#09090b]/90 backdrop-blur-xl flex items-center justify-between px-6 lg:px-8'>
            <div>
                <p className='text-xs text-zinc-500'>Welcome back</p>
                <h2 className='text-lg font-semibold text-white'>Expense Dashboard</h2>
            </div>
        </header>
    )
}

export default Topbar