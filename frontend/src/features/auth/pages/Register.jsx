import React from 'react'
import { useState } from 'react'
import { registerUser } from '../api/auth.api'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Spinner from '../../../components/Spinner'

export default function Register() {

    const navigate = useNavigate()

    const {isLoading,handleUserRegisteration} = useAuth()

    const [formData, setFormData] = useState({
        userName:'',
        email: '',
        password: ''
    })

    const [formError, setFormError] = useState(false)
 
    const handleChange = (e)=>{
        const {name, value} = e.target
        
        setFormData((prev)=>({...prev, [name]:value}))
        setFormError(false)

    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(formData.userName.trim() === '' || formData.email.trim() === '' || formData.password.trim() === ''){
            setFormError(true)
            return
        }

        handleUserRegisteration(formData)
            .then((response)=>{
                navigate('/login',{
                    state:{
                        message: 'Account created successfully. Please Log in'
                    }
                })
            })
            .catch((err)=>{
                // const errorMessage = 
                // setRegisterationResponse({fetched:false, message:response.message})
                console.log(err)
            })

        // registerUser(formData)
        //     .then((response)=>{
        //         navigate('/login',{
        //             state:{
        //                 message: 'Account created successfully. Please Log in'
        //             }
        //         })
        //     })
        //     .catch((err)=>{
        //         // const errorMessage = 
        //         // setRegisterationResponse({fetched:false, message:response.message})
        //         console.log(err)
        //     })
        return
    }

  return (
    <div className='w-full min-h-dvh flex flex-col justify-center items-center px-4 sm:px-0 gap-2'>
        <form 
            className='w-full max-w-md border-2 border-[#334155] bg-[#1E293B] shadow-2xl flex flex-col gap-6 p-4 sm:p-6 rounded-xl'
            onSubmit={handleSubmit}
        >
            <div className=''>
                <h1 className='text-[#F8FAFC] text-2xl sm:text-3xl text-center'>Create Account</h1>
                <p className='text-[#94A3B8] text-sm sm:text-base mt-2 text-center'>Join our community today</p>
            </div>

            {formError ?
                <div className='w-full'>
                    <p className='text-base text-[#E05555] text-center'>*Please fill all the fields</p>
                </div>
                :
                <></>
            }   
            
            <div className='w-full text-[#94A3B8] flex flex-col gap-1.5'>
                <label htmlFor="userName" className='text-[#CBD5E1] text-lg sm:text-xl'>User Name</label>
                <input 
                    type="text"
                    id='userName'
                    name='userName'
                    value={formData.userName}
                    onChange={handleChange}
                    placeholder='Enter your name'
                    className='w-full focus:outline-none bg-[#0B1120] border border-[#334155] focus:ring-1 focus:ring-[rgba(56, 189, 248, 0.5)] transition-all duration-200 focus:shadow-xl focus:scale-[1.01] p-2 sm:p-3 text-white text-base'
                />
            </div>

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
                    <div className='mt-4 flex flex-row w-full text-[#0F1520] bg-[#38BDF8] hover:bg-[#108cc5] text-lg sm:text-xl cursor-pointer py-2 rounded-items-center justify-center gap-4'>
                        <Spinner/>
                        <button
                            className='cursor-not-allowed'
                            disabled
                            
                        >
                            Registering...
                        </button>
                    </div>
                                
                :
                    <button
                        className='mt-4 w-full text-[#0F1520]  bg-[#38BDF8] hover:[#108cc5] hover:scale-[1.05] transition-all duration-2 hover:shadow-lg text-lg sm:text-xl cursor-pointer py-2 rounded-lg'
                        type='submit'
                    >
                        Submit
                    </button>
            }
            {/* <button
                className='mt-4 w-full text-[#0F1520]  bg-[#38BDF8] hover:bg-[#108cc5] hover:scale-[1.05] transition-all duration-200 hover:shadow-lg text-lg sm:text-xl cursor-pointer py-2 rounded-lg'
                type='submit'
            >
                Submit
            </button> */}
        </form>
    </div>
  )
}
