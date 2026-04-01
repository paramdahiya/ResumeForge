import React from 'react'

export default function () {
  return (
    <div className='flex flex-col w-full items-center gap-4'>
        
        <h1 
            className='inline-block bg-linear-to-r from-[#38BDF8] to-[#1D4ED8] text-transparent bg-clip-text font-playfair text-5xl font-bold leading-none mt-30'>
                Create Your Custom Interview Plan
        </h1>
        <p 
            className='text-[#94A3B8] text-base text-center'>
                Let Gemini AI analyse the job requirements and your unique profile to build a winning strategy.
        </p>

        <div className='grid grid-cols-2 border bg-[#1E293B]'>
            
            <div className='flex flex-col border border-[#334155]'>
                <label className='text-[#F8FAFC]' htmlFor="jd">Target Job Description</label>
                <textarea className='text-[#94A3B8]' name="jd" id="jd">Enter the job description....</textarea>
            </div>

            <div className='flex flex-col border border-[#334155]'>
                <label className='text-[#F8FAFC]' htmlFor="jd">Target Job Description</label>
                <textarea className='text-[#94A3B8]' name="jd" id="jd">Enter the job description....</textarea>
            </div>

        </div>
    </div>
  )
}
