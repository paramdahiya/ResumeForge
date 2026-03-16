import React from 'react'
import { useState } from 'react'
import { useNavigate, Link , useLocation} from 'react-router-dom'
import { loginUser } from '../api/auth.api'
import {useAuth} from '../../../hooks/useAuth'
import Spinner from '../../../components/Spinner'

export default function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [hideRegisterationMessage, setHideRegisterationMessage] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()
    const {message} = location.state || {} // check if redirected from registeration

    const [formError, setFormError] = useState(false)
    const {isLoading, handleLogin} = useAuth()

    const handleChange = (e)=>{
        const {name, value} = e.target
        
        setFormData((prev)=>({...prev, [name]:value}))
        setFormError(false)

    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(formData.email.trim() === '' || formData.password.trim() === ''){
            setFormError(true)
            return
        }
    
        handleLogin(formData)
            .then((res)=>(navigate('/')))
            .catch((err)=>{
                console.log(err.message)
            })
        // // send the api request
        // loginUser(formData)
        //     .then((res)=>(console.log(res)))
        //     .catch((err)=>{
        //         console.log(err.message)
        //     })
    }



  return (
    <div className='w-full min-h-dvh flex flex-col justify-center items-center px-4 sm:px-0 relative'>
        
        { message && (
            <div className={` ${hideRegisterationMessage ? 'hidden' : 'w-full max-w-md px-4 sm:px-0 absolute top-10 font-medium'}`}>
                <div className=' w-full bg-[#38BDF8] text-sm sm:text-base text-[#0F1520] text-center rounded-lg p-2 sm:p-3 relative'>
                    
                    <p>{message}</p>
                    <span 
                        className='absolute right-2 top-1 sm:top-2 text-lg sm:text-xl cursor-pointer'
                        onClick={() => setHideRegisterationMessage(true)}
                    >
                        &times;
                    </span>
                    
                </div>
            </div>
        )}

        <form 
            className='w-full max-w-md border-2 border-[#334155] bg-[#1E293B] shadow-2xl flex flex-col gap-6 p-4 sm:p-6 rounded-xl'
            onSubmit={handleSubmit}
        >
            <div className=''>
                <h1 className='text-[#F8FAFC] text-2xl sm:text-3xl text-center'>Welcome Back</h1>
                <p 
                    className='text-[#94A3B8] text-sm sm:text-base mt-2 text-center'
                >
                    Don't have an account?
                    <Link to={'/register'} className='ml-2 text-[#38BDF8]'>Sign Up</Link>
                </p>
            </div>

            {formError ?
                <div className='w-full'>
                    <p className='text-base text-[#E05555] text-center'>*Please fill all the fields</p>
                </div>
                :
                <></>
            }   

            <div className='w-full flex flex-col gap-1.5'>
                <label htmlFor="email" className='text-[#CBD5E1] text-lg sm:text-xl'>Email</label>
                <input 
                    type="email"
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Enter your email'
                    className='w-full focus:outline-none bg-[#0B1120] border border-[#334155] focus:ring-1 focus:ring-[rgba(56, 189, 248, 0.5)] transition-all duration-200 focus:shadow-xl focus:scale-[1.01] p-2 sm:p-3 text-white text-base'
                />
            </div>

            <div className='w-full text-[#94A3B8] flex flex-col gap-1.5'>
                <label htmlFor="password" className='text-[#CBD5E1] text-lg sm:text-xl'>Password</label>
                <input 
                    type="password"
                    id='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Enter your password'
                    className='w-full focus:outline-none bg-[#0B1120] border border-[#334155] focus:ring-1 focus:ring-[rgba(56, 189, 248, 0.5)] transition-all duration-200 focus:shadow-xl focus:scale-[1.01] p-2 sm:p-3 text-white text-base'
                />
            </div>

            {isLoading 
                ?
                    <div className='mt-4 flex flex-row w-full text-[#0F1520]  bg-[#38BDF8] hover:bg-[#108cc5] text-lg sm:text-xl cursor-pointer py-2 rounded-lg items-center justify-center gap-4'>
                        <Spinner/>
                        <button
                            className='cursor-not-allowed'
                            disabled
                            
                        >
                            Logging...
                        </button>
                    </div>
                    
                :
                    <button
                        className='mt-4 w-full text-[#0F1520]  bg-[#38BDF8] hover:bg-[#108cc5] hover:scale-[1.05] transition-all duration-200 hover:shadow-lg text-lg sm:text-xl cursor-pointer py-2 rounded-lg'
                        type='submit'
                    >
                        Submit
                    </button>
            }
            
        </form>
    </div>
  )
}
