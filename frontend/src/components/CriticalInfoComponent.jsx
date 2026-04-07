// component to show the AI generated info - Critical, Warning, Good

import React from 'react'

export default function InfoComponent({issue}) {
    return (
        <div className='flex gap-2 sm:gap-4 bg-[#1E293B] border border-[#334155] shadow-lg p-6'>
            <div className='self-start bg-red-400/50 text-red-400 px-1 py-0.5 text-sm'>
                <h2>CRITICAL</h2>
            </div>
            <div className=''>
                <p className='text-[#94A3B8]'>
                    {issue}
                </p>
            </div>
        </div>
    )
}
