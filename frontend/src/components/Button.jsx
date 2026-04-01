import React from 'react'

function Button({text}) {
  return (
    <button className='text-[#F8FAFC] bg-[#38BDF8] hover:bg-[#108cc5] hover:scale-[1.05] transition-all duration-200 hover:shadow-md text-lg cursor-pointer rounded-lg px-6 py-3 font-semibold'>
        {text}
    </button>
  )
}

export default Button