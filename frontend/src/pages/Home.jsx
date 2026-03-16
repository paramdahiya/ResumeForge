import React from 'react'
import Header from '../components/Header'

export default function Home() {

    return (
        <div className='w-full'>
            <Header/>
            <div className='grid grid-cols-1 sm:grid-cols-2 p-16 gap-12'>
                
                <div className='flex flex-col gap-4'>
                    
                    <div className='self-start border border-[#334155] rounded-2xl text-[#94A3B8] p-2 flex gap-2 items-center'>
                        <div class="h-4 w-4 animate-pulse rounded-full bg-blue-400"></div>

                        <p>Powered by
                            <span className='text-[#38BDF8] ml-2'>Gemini AI</span>
                        </p>
                    </div>

                    <div>
                        <h1 className='text-[#F8FAFC] font-playfair font-black text-6xl leading-none'>Get Hired Faster.
                        </h1 >

                        <h1 className='text-[#F8FAFC] font-playfair font-black text-6xl leading-none'>
                            Fix Your Resume
                        </h1>
                        <h1 
                            className='inline-block bg-linear-to-r from-[#38BDF8] to-[#1D4ED8] text-transparent bg-clip-text font-playfair text-6xl font-bold leading-none'
                        >
                            Right Now.
                        </h1>
                    </div>

                    <div className='text-[#94A3B8] text-base sm:text-lg'>
                        <p>Upload your resume and our AI surfaces every issue standing between you and your next interview — in seconds, not hours.</p>
                    </div>

                </div>

                {/* second column */}
                <div className='text-red-300 border'>
                    <h1>Second col</h1>
                </div>
            </div>
        </div>
    )
}
