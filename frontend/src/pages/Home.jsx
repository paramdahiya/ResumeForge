import React from 'react'
import Header from '../components/Header'
import '../css/home.css'
import Button from '../components/Button'
import ScoreCard from '../components/ScoreCard'

const dummyData = {
    score:62,
    atsScore:41,
    clarity:76,
    impact:58,
    NumCriticalIssues:6,
    overallAnalysis: "Needs Improvement",
    reviewSummary:"6 critical issues found. ATS compatibility low. Impact language weak across all roles.",
    criticalIssues: 
    [
        "No quantified achievements - add metrics to bullet points",

    ],
    NumWarnings:2,
    warnings:
    [
        "Missing keywords for target role - low ATS match rate",
        "Summary section too generic - tailor to the job description"
    ],
    good:
    [
        "Education section is well structured and complete"
    ]
}

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
                    
                    <div className='border-t border-t-[#0EA5E9] bg-[#1E293B] p-2 text-[#F8FAFC] flex flex-col shadow-xl pl-5'>
                        <h2 className='text-center inline-block bg-linear-to-r from-[#38BDF8] to-[#1D4ED8] text-transparent bg-clip-text font-playfair font-black text-base mt-3'>RESUME ANALYSIS</h2>

                        <div className='grid grid-cols-2 mt-6'>
                            <div className=''>
                                <div className="outer flex flex-col">
                                    {/* dummy data */}
                                    <div class="inner flex flex-col">
                                        <span className='text-[#F8FAFC] text-3xl'>{dummyData.score}</span>
                                        <p className='text-[#94A3B8]'>Score</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col'>
                                <h2 className='text-[#F8FAFC] text-xl'>{dummyData.overallAnalysis}</h2>
                                <p className='text-[#94A3B8]'>{dummyData.reviewSummary}</p>
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-row mt-10 border border-[#334155] bg-[#1E293B] shadow-lg p-5 justify-between'>
                            <ScoreCard name="IMPACT" score={dummyData.impact}></ScoreCard>
                            <ScoreCard name="CLARITY" score={dummyData.clarity}></ScoreCard>
                            <ScoreCard name="ATS SCORE" score={dummyData.atsScore}></ScoreCard>
                        </div>
                    
                    </div>

                </div>

                {/* <div className='text-[#F8FAFC] flex flex-col mt-20'>
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
                </div> */}
            </div>

        </div>
    )
}
