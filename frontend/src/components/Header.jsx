import React from 'react'

export default function Header() {
    return (
        <div className='w-full bg-[#1E293B]/95 shadow-2xl p-6 px-16 sticky top-0 z-50 flex flex-col sm:flex-row items-center justify-between'>        
            
            <div 
                className='inline-block bg-linear-to-r from-[#38BDF8] to-[#1D4ED8] bg-clip-text text-transparent text-4xl font-bold'
            >
                <h1>ResumeForge</h1>
            </div>

            <ul className=' flex-1 text-[#94A3B8] flex text-md sm:text-lg gap-12 justify-center'>
                    <li className='hover:underline cursor-pointer'
                    >
                        Features
                    </li>
                    <li className='hover:underline cursor-pointer'
                    >
                        How it works
                    </li>
            </ul>

            <div className='start inline-block'>
                <button
                    className='text-[#F8FAFC] bg-[#38BDF8] hover:bg-[#108cc5] hover:scale-[1.05]  transition-all duration-200 hover:shadow-md text-lg cursor-pointer rounded-lg px-6 py-3 font-semibold'
                >
                    Start Free
                </button>
            </div>
                
        </div>
    )
}
