// component to show the AI generated info - Critical, Warning, Good

import React from 'react'

export default function InfoComponent({issue}) {
    return (
        <div className='grid grid-cols-[1fr_99fr]'>
            
            <div className='bg-yellow-400'></div>

            <div className='flex gap-2 sm:gap-4 bg-[#1E293B] border border-[#334155] shadow-lg pl-4 pb-6 pt-4'>
                <div className='self-start bg-yellow-400/50 text-yellow-400 px-1 py-0.5 text-sm'>
                    <h2>WARNING</h2>
                </div>
                <div className=''>
                    <p className='text-[#94A3B8]'>
                        {issue}
                    </p>
                </div>
            </div>

        </div>
    )
}
