const StatCard = ({ title, value, subtitle, icon, accent }) => {
    return (
        <div className='bg-[#111113] border border-white/10 rounded-2xl p-5'>
            <div className='flex items-start justify-between'>
                <div>
                    <p className='text-sm text-zinc-500'>{title}</p>
                    <h3 className='text-2xl font-semibold text-white mt-2'>{value}</h3>
                </div>

                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${accent}`}>
                    {icon}
                </div>
            </div>

            <p className='text-xs text-zinc-500 mt-4'>{subtitle}</p>
        </div>
    )
}

export default StatCard