import { ArrowUpRight, MoreHorizontal } from "lucide-react"
import { useState } from "react"
import expenseapi from "../../services/expense.service"
import { toast } from "sonner"
import { useForm } from "react-hook-form"

const ExpenseCard = ({ _id, title, amount, fetchExpense }) => {
    const [showMenu, setShowMenu] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const { register, reset, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        try {
            const response = await expenseapi.patchExpense(_id, data)
            toast.success(response.data)
            fetchExpense()
            setIsEditing(false)
        } catch (error) {
            toast.error(error.response.data)
        }
    }

    return (
        <div className='relative flex items-center justify-between p-4 rounded-xl border border-white/10 bg-[#111113] hover:bg-white/3 transition'>
            {isEditing ? (
                <form onSubmit={handleSubmit(onSubmit)} className='flex items-center gap-3 w-full'>
                    <div className='flex-1'>
                        <label className='block text-xs text-zinc-500 mb-1'>Title</label>
                        <input
                            {...register("title")}
                            className='w-full bg-[#09090b] border border-emerald-500/30 focus:border-emerald-500/60 rounded-lg px-3 py-2 text-sm text-white outline-none transition'
                        />
                    </div>

                    <div className='w-28'>
                        <label className='block text-xs text-zinc-500 mb-1'>Amount</label>
                        <input
                            type='number'
                            {...register("amount")}
                            className='w-full bg-[#09090b] border border-emerald-500/30 focus:border-emerald-500/60 rounded-lg px-3 py-2 text-sm text-white outline-none transition'
                        />
                    </div>

                    <button
                        type='submit'
                        className='self-end px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-semibold transition cursor-pointer'
                    >
                        Update
                    </button>
                </form>
            ) : (
                <>
                    <div className='flex items-center gap-4'>
                        <div className='w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center'>
                            <ArrowUpRight size={18} className='text-zinc-400' />
                        </div>
                        <div>
                            <h4 className='text-sm font-medium text-white'>{title}</h4>
                        </div>
                    </div>

                    <div className='flex items-center gap-4'>
                        <p className='text-sm font-semibold text-white'>₹{amount}</p>
                    </div>
                </>
            )}

            {!isEditing && (
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className='text-zinc-500 hover:text-white cursor-pointer'
                >
                    <MoreHorizontal size={18} />
                </button>
            )}

            {showMenu && !isEditing && (
                <div className='absolute right-4 top-12 z-10 w-28 rounded-lg border border-white/10 bg-[#18181b] p-1 shadow-xl'>
                    <button
                        className='w-full text-left px-3 py-2 text-sm text-white hover:bg-white/5 rounded-md'
                        onClick={() => {
                            reset({
                                title,
                                amount
                            })
                            setIsEditing(true)
                            setShowMenu(false)
                        }}
                    >
                        Edit
                    </button>

                    <button
                        className='w-full text-left px-3 py-2 text-sm text-red-400 hover:bg-white/5 cursor-pointer rounded-md'
                        onClick={async () => {
                            try {
                                const response = await expenseapi.deleteExpense(_id)
                                fetchExpense()
                                toast.success(response.data)
                            } catch (error) {
                                toast.error(error.response.data)
                            }
                        }}
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    )
}

export default ExpenseCard