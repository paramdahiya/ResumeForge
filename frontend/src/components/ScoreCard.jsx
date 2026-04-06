//component to show to score for the resume metrics

import React from 'react'

export default function ScoreCard({score, name}) {
    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-2xl'>{score}</h2>
            <p className='text-[#94A3B8]'>{name}</p>
        </div>
    )
}
