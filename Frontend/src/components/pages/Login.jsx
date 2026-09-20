import { WalletCards } from "lucide-react"
import AuthInput from "../auth/AuthInput"
import authapi from '../../services/auth.service.js'
import { useForm } from "react-hook-form"
import { useState } from "react"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isloading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const onSubmit = async(data) => {
        try {
            setIsLoading(true)
            const response = await authapi.loginapi(data)
            toast.success(response.data.message)
            navigate('/')
        }catch(error){
            toast.error(error.response.data)
        }finally{
            setIsLoading(false)
        }
    }
    return (
        <form className='min-h-screen bg-[#09090b] flex items-center justify-center px-4' onSubmit={handleSubmit(onSubmit)}>
            <div className='w-full max-w-md'>
                <div className='text-center mb-8'>
                    <div className='w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-5'>
                        <WalletCards size={24} className='text-black' />
                    </div>

                    <h1 className='text-2xl font-semibold text-white'>Welcome back</h1>
                    <p className='text-sm text-zinc-500 mt-2'>Sign in to manage your expenses</p>
                </div>

                <div className='bg-[#111113] border border-white/10 rounded-2xl p-6 space-y-5'>
                    <AuthInput
                        label='Email'
                        type='email'
                        placeholder='you@example.com'
                        {...register('email', {
                            required: "Email is required!"
                        })}
                    />

                    <AuthInput
                        label='Password'
                        type='password'
                        placeholder='••••••••'
                        {...register('password', {
                            required: "Password is required!"
                        })}
                    />

                    <button className='w-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-3 rounded-xl transition cursor-pointer' disabled={isloading}>
                        {isloading?"Logging In":"Log in"}
                    </button>

                    <p className='text-center text-sm text-zinc-500'>
                        Don't have an account?
                        <span className='text-emerald-400 ml-1 cursor-pointer' onClick={()=>
                            navigate('/signup')
                        }>Create one</span>
                    </p>
                </div>
            </div>
        </form>
    )
}

export default Login