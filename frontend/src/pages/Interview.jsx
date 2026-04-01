import React from 'react'
import { useState } from 'react'

export default function () {
    const [jobDescription, setJobDescription] = useState("");
    const [summary, setSummary] = useState("");

  return (
    <div className='flex flex-col w-full items-center gap-4 p-2 md:p-0'>
        
        <h1 
            className='inline-block bg-linear-to-r from-[#38BDF8] to-[#1D4ED8] text-transparent bg-clip-text font-playfair text-5xl font-bold leading-none mt-30'>
                Create Your Custom Interview Plan
        </h1>
        <p 
            className='text-[#94A3B8] text-base'>
                Let Gemini AI analyse the job requirements and your unique profile to build a winning strategy.
        </p>

        <div className='w-full md:w-7xl bg-[#1E293B]'>
            <div className='w-full grid grid-cols-2'>
                
                <div className='w-full flex flex-col p-2 gap-2'>
                    <label 
                        className='text-[#F8FAFC] text-lg'
                        htmlFor="jd"
                    >
                            Job Description
                    </label>
                    <textarea 
                        name="jd" 
                        id="jd"
                        className='text-[#94A3B8] h-100 w-full border border-[#334155] pl-2 focus:outline-none focus:ring-1 focus:ring-[rgba(56, 189, 248, 0.5)] transition-all duration-200 focus:shadow-xl focus:scale-[1.01]'
                        placeholder='Enter the job description...'
                    >
                    </textarea>
                </div>

                <div className='w-full'>
                    <label 
                        className='text-[#F8FAFC] text-lg'
                        htmlFor="jd"
                    >
                            Resume
                    </label>
                </div>

            </div>
        </div>
    </div>
  )
}
