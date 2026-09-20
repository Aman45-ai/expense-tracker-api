
import { WalletCards } from "lucide-react"
import AuthInput from "../auth/AuthInput"
import { useForm } from 'react-hook-form'
import authapi from "../../services/auth.service.js"
import { useState } from "react"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"

const Signup = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange"
    })
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()


    const password = watch('password')
    const onSubmit = async (data) => {
        try {
            setIsLoading(true)
            const response = await authapi.signupapi(data)
            toast.success(response.data.message)
            navigate('/login')
        } catch (error) {
            toast.error(error.response.data)
        } finally {
            setIsLoading(false)

        }
    }
    return (
        <form className='min-h-screen bg-[#09090b] flex items-center justify-center px-4'
            onSubmit={handleSubmit(onSubmit)}>
            <div className='w-full max-w-md'>
                <div className='text-center mb-8'>
                    <div className='w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-5'>
                        <WalletCards size={24} className='text-black' />
                    </div>

                    <h1 className='text-2xl font-semibold text-white'>Create your account</h1>
                    <p className='text-sm text-zinc-500 mt-2'>Start managing your expenses smarter</p>
                </div>

                <div className='bg-[#111113] border border-white/10 rounded-2xl p-6 space-y-5'>
                    <AuthInput
                        label='Email'
                        type='email'
                        placeholder='you@example.com'
                        {...register('email', {
                            required: "Email is required!",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Enter a valid email'
                            }
                        })}
                    />
                    {errors.email && <p className="text-red-600">{errors.email.message}</p>}

                    <AuthInput
                        label='Password'
                        type='password'
                        placeholder='••••••••'
                        {...register('password', {
                            required: "Password is required!",
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: 'Password must contain lowercase, uppercase, number, special character & it must be of atleast 8 characters long.'
                            }
                        })}
                    />

                    {errors.password && <p className="text-red-600">{errors.password.message}</p>}

                    <AuthInput
                        label='Confirm Password'
                        type='password'
                        placeholder='••••••••'
                        {...register('confPassword', {
                            required: "Confirm Password is required!",
                            validate: (value) => value === password || 'Passwords do not match'
                        })}
                    />

                    {errors.confPassword && <p className="text-red-600">{errors.confPassword.message}</p>}

                    <button className='w-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-3 rounded-xl transition cursor-pointer' disabled={isLoading}>
                        {isLoading === true ? "Creating Account" : "Create Account"}
                    </button>

                    <p className='text-center text-sm text-zinc-500'>
                        Already have an account?
                        <span className='text-emerald-400 ml-1 cursor-pointer' onClick={()=>{
                            navigate('/login')
                        }}>Log in</span>
                    </p>
                </div>
            </div>
        </form>

    )
}

export default Signup