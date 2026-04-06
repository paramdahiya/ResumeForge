import React from 'react'
import { useState } from 'react'

export default function () {
    const [jobDescription, setJobDescription] = useState("");
    const [summary, setSummary] = useState("");

  return (
    <div className='flex flex-col w-full items-center gap-4 p-2'>
        
        <h1 
            className='inline-block bg-linear-to-r from-[#38BDF8] to-[#1D4ED8] text-transparent bg-clip-text font-playfair text-5xl font-bold leading-none mt-30'>
                Create Your Custom Interview Plan
        </h1>
        <p 
            className='text-[#94A3B8] text-lg'>
                Let Gemini AI analyse the job requirements and your unique profile to build a winning strategy.
        </p>

        <div className='w-full md:max-w-7xl bg-[#1E293B]'>
            <div className='w-full grid md:grid-cols-2'>
                
                <div className='w-full flex flex-col p-2 gap-2'>
                    <label 
                        className='text-[#F8FAFC] text-xl md:text-2xl flex items-center gap-2'
                        htmlFor="jd"
                    >
                        <span class="material-symbols-outlined">
                            work
                        </span>
                        Job Description
                    </label>
                    <textarea 
                        name="jd" 
                        id="jd"
                        className='text-[#94A3B8] text-xl h-100 border border-[#334155] pl-2 focus:outline-none focus:ring-1 focus:ring-[rgba(56, 189, 248, 0.5)] transition-all duration-200 focus:shadow-xl focus:scale-[1.01]'
                        placeholder='Enter the job description...'
                    >
                    </textarea>
                </div>

                <div className='w-full flex flex-col p-2 gap-2'>
                     <div className='flex items-center'>
                        <span class="material-symbols-outlined">
                            account_circle
                        </span>
                        <h1>Your Profile</h1>
                    </div>

                    <label 
                        className='text-[#F8FAFC] text-xl md:text-2xl flex items-center gap-2'
                        htmlFor="jd"
                    >
                        
                        Resume
                    </label>
                    <input 
                        type="file"
                        name="resume" 
                        id="resume" 
                        className='text-[#94A3B8] text-xl  border border-[#334155] pl-2 focus:outline-none focus:ring-1 focus:ring-[rgba(56, 189, 248, 0.5)] transition-all duration-200 focus:shadow-xl focus:scale-[1.01]'
                        placeholder='Enter the job description...'
                    />
                    <div className=' text-[#94A3B8] inline-grid grid-cols-[1fr_auto_1fr] items-center gap-3'>
                        <hr />
                        <span>OR</span>
                        <hr />
                    </div>
                    
                    <div className='w-full flex flex-col p-2 gap-2'>
                        <label 
                            className='text-[#F8FAFC] text-xl md:text-2xl flex items-center gap-2'
                            htmlFor="jd"
                        >   
                            Quick Self Description
                        </label>
                        <textarea 
                            name="summart" 
                            id="summary"
                            value={summary}
                            placeholder='Enter Your Professional Summary'
                            className='text-[#94A3B8] text-xl  border border-[#334155] pl-2 focus:outline-none focus:ring-1 focus:ring-[rgba(56, 189, 248, 0.5)] transition-all duration-200 focus:shadow-xl focus:scale-[1.01]'
                        ></textarea>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}
