const AuthInput = ({ label, type = "text", placeholder, ...rest}) => {
    return (
        <div>
            <label className='text-sm text-zinc-400'>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className='mt-2 w-full bg-[#111113] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-emerald-500/50'
                {...rest}
            />
        </div>
    )
}

export default AuthInput