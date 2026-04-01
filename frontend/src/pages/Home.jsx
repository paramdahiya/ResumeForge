import React from 'react'
import Header from '../components/Header'
import '../css/home.css'
import Button from '../components/Button'

export default function Home() {

    return (
        <div className='w-full'>
            <Header/>
            <div className='p-16'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
                    
                    <div className='flex flex-col gap-4'>
                        
                        <div className='self-start border border-[#334155] rounded-2xl text-[#94A3B8] p-2 flex gap-2 items-center'>
                            <div className="h-4 w-4 animate-pulse rounded-full bg-blue-400"></div>

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

                        <div className='text-[#94A3B8] text-base sm:text-lg mt-8'>
                            <p>Comprehensive interview preparation report to help you get your dream job.</p>
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                        <Button text="Analyse Resume"></Button>
                        <Button text="See Sample Report"></Button>
                        </div>
                    </div>

                    {/* second column */}
                    
                    <div className='border border-[#334155] p-2 text-[#F8FAFC] flex flex-col'>
                    <h2 className='text-center font-semibold text-2xl' >Personalised Interview Preparation Plan</h2>
                    <div class="outer flex flex-col">
                            <div class="inner">
                                <span className='text-[#0EA5E9] text-xl font-bold'>90%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-[#F8FAFC] flex flex-col mt-20'>
                    <h1
                        className='text-[#F8FAFC] font-playfair font-black text-6xl leading-none'>
                            Get Personalised Interview Preparation Plan in 3 easy steps:
                    </h1>
                        <ul className='list-none'>
                        <li>
                            <div className='flex flex-col'>
                                <label className='text-[#94A3B8]' htmlFor="jobDescription">Job Description</label>
                                <textarea name="jobDescription" id="jobDescription"></textarea>
                            </div>
                        </li>
                        <li>
                            <div className='flex flex-col'>
                                <label className='text-[#94A3B8]' htmlFor="jobDescription">Your Summary</label>
                                <textarea name="jobDescription" id="jobDescription"></textarea>
                            </div>
                        </li>
                        <li>
                            <div className='flex flex-col'>
                                <label className='text-[#94A3B8]' htmlFor="jobDescription">Upload Resume</label>
                                <textarea name="jobDescription" id="jobDescription"></textarea>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
