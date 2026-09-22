import { Plus } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import expenseapi from '../../services/expense.service'
import { useState } from "react"

const ExpenseForm = ({fetchExpense}) => {
    const { register, handleSubmit, formState: { errors },reset } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange"
    })
    const onSubmit = async(data) => {
        try {
            const response = await expenseapi.createExpense(data)
            toast.success(response.data)
            fetchExpense()
            reset()
        } catch (error) {
            toast.error(error.response.data)
        }
    }
    return (
        <form className='bg-[#111113] border border-white/10 rounded-2xl p-6' onSubmit={handleSubmit(onSubmit)}>
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
                        {...register('title', {
                            required: "Title is required!",
                            minLength: {
                                value: 3,
                                message: "Title must be of atleast 3 characters."
                            }
                        })}
                    />
                </div>
                {errors.title && <p className="text-red-500">{errors.title.message}</p>}

                <div>
                    <label className='text-xs text-zinc-400'>Amount</label>
                    <input
                        type='number'
                        placeholder='₹ 0.00'
                        className='mt-2 w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-emerald-500/50'
                        {...register('amount', {
                            required: "Amount is required!",
                            pattern: {
                                value: /^(?!0+(?:\.0{1,2})?$)\d+(?:\.\d{1,2})?$/,
                                message: "Please enter a valid amount."
                            }
                        })}
                    />
                </div>
                {errors.amount && <p className="text-red-500">{errors.amount.message}</p>}

                <button className='w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm py-3 rounded-xl transition cursor-pointer'>
                    <Plus size={18} />
                    Add Expense
                </button>
            </div>
        </form>
    )
}

export default ExpenseForm