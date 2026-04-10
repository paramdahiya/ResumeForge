import React from 'react'
import Spinner from './Spinner';

export default function DisabledButton({text}) {
  return (
    <div 
        className='flex justify-center mt-6 mb-6 gap-4'
    >
        <div className='self-center flex gap-0.5 bg-[#38BDF8] hover:bg-[#108cc5] hover:scale-[1.05] transition-all duration-200 hover:shadow-md text-xl rounded-lg items-center px-2'>
            <Spinner/>
            <button
                className='text-[#F8FAFC] px-4 sm:px-6 py-2 sm:py-3 font-semibold cursor-not-allowed'
                disabled
            >
                {text}
            </button>
        </div>

    </div>
  )
}
