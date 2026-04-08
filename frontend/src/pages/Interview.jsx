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

        <div className='w-full md:max-w-7xl bg-[#1E293B] shadow-xl'>
            <div className='w-full grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]'>
                
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
                        className='text-[#94A3B8] text-xl h-120 border border-[#334155] pl-2 focus:outline-none focus:ring-1 focus:ring-[rgba(56, 189, 248, 0.5)] transition-all duration-200 focus:shadow-xl focus:scale-[1.01]'
                        placeholder='Enter the job description...'
                    >
                    </textarea>
                </div>

                <div className='bg-[#334155] w-1'></div>

                <div className='w-full flex flex-col p-2 gap-2'>
                     <div className='text-[#F8FAFC] text-xl md:text-2xl flex items-center gap-2'>
                        <span class="material-symbols-outlined">
                            account_circle
                        </span>
                        <h1>Your Profile</h1>
                    </div>

                    <label 
                        className='text-[#94A3B8] text-xl md:text-2xl flex items-center gap-2'
                        htmlFor="jd"
                    >
                        
                        Resume
                    </label>
                    <input 
                        type="file"
                        name="resume" 
                        id="resume" 
                        className='text-[#94A3B8] text-xl  border border-[#334155] pl-2 focus:outline-none focus:ring-1 focus:ring-[rgba(56, 189, 248, 0.5)] transition-all duration-200 focus:shadow-xl focus:scale-[1.01]'
                    />
                    {/* the below div creates the horizontal line */}
                    <div className=' text-[#94A3B8] inline-grid grid-cols-[1fr_auto_1fr] items-center gap-3 mt-4'>
                        <hr />
                        <span>OR</span>
                        <hr />
                    </div>
                    
                    {/* div for self description */}
                    <div className='w-full flex flex-col gap-2'>
                        <label 
                            className='text-[#94A3B8] text-xl md:text-2xl flex items-center gap-2'
                            htmlFor="jd"
                        >   
                            Quick Self Description
                        </label>
                        <textarea 
                            name="summart" 
                            id="summary"
                            value={summary}
                            placeholder='Enter Your Professional Summary'
                            className='text-[#94A3B8] text-xl  border border-[#334155] pl-2 focus:outline-none focus:ring-1 focus:ring-[rgba(56, 189, 248, 0.5)] transition-all duration-200 focus:shadow-xl focus:scale-[1.01] h-80'
                        ></textarea>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}
