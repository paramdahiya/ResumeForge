import React from 'react'
import { useState } from 'react'
import Button from "../components/Button";
import { getInterviewReport } from '../api/gemini.api';
import { AuthContext } from '../features/auth/auth.context';
import { useContext } from 'react';
import DisabledButton from '../components/DisabledButton';
import Spinner from '../components/Spinner';

export default function () {
    const [jobDescription, setJobDescription] = useState("");
    const [summary, setSummary] = useState("");
    const [file, setFile] = useState(null);
    const {isLoading, setIsLoading} = useContext(AuthContext);

    const handleFileUpload = (e)=>{
        const file = e.target.files[0]
        setFile(file);
    }

    // check for empty fields
    const inputValidation = ()=>{
        if(!file){
            alert("Please upload a file")
            return false;
        }

        else if (jobDescription.trim() === ""){
            alert("Please provide a job description.");
            return false;
        }
        else if (summary.trim() === ""){
            alert("Please provide a summary.");
            return false;
        }

        return true;
    }

    const handleClick = async (e)=>{
        if (!inputValidation()){
            return;
        }

        setIsLoading(true);
        try {

            // send api req to the backend
            await getInterviewReport({jobDescription, selfDescription:summary, resume:file});

        } catch (error) {
            
        }
        finally{
            setIsLoading(false);
        }
    }
  return (
    <div className='flex flex-col w-full items-center gap-4 p-2'>
        
        <h1 
            className='inline-block bg-linear-to-r from-[#38BDF8] to-[#1D4ED8] text-transparent bg-clip-text font-playfair text-5xl font-bold leading-none mt-30'>
                Create Your Custom Interview Plan
        </h1>
        <p 
            className='text-[#94A3B8] text-lg'>
                Let Gemini AI analyse the job requirements and your unique profile to build a winning strategy.
        </p>

        <div className='w-full md:max-w-7xl bg-[#1E293B] shadow-xl'>
            
            <div className='w-full grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]'>

                <div className='w-full flex flex-col p-2 gap-2'>
                    <label 
                        className='text-[#F8FAFC] text-xl md:text-2xl flex items-center gap-2'
                        htmlFor="jd"
                    >
                        <span class="material-symbols-outlined">
                            work
                        </span>
                        Job Description
                    </label>
                    <textarea 
                        name="jd" 
                        id="jd"
                        onChange={(e)=>(setJobDescription(e.target.value))}
                        className='text-[#94A3B8] text-xl h-120 border border-[#334155] pl-2 focus:outline-none focus:ring-1 focus:ring-[rgba(56, 189, 248, 0.5)] transition-all duration-200 focus:shadow-xl focus:scale-[1.01]'
                        placeholder='Enter the job description...'
                    >
                    </textarea>
                </div>

                <div className='bg-[#334155] w-1'></div>

                <div className='w-full flex flex-col p-2 gap-2'>
                     <div className='text-[#F8FAFC] text-xl md:text-2xl flex items-center gap-2'>
                        <span class="material-symbols-outlined">
                            account_circle
                        </span>
                        <h1>Your Profile</h1>
                    </div>

                    <label 
                        className='text-[#94A3B8] text-xl md:text-2xl flex items-center gap-2'
                        htmlFor="jd"
                    >
                        
                        Resume
                    </label>
                    <input 
                        type="file"
                        name="resume" 
                        id="resume" 
                        accept='.pdf, application/pdf'
                        onChange={handleFileUpload}
                        className='text-[#94A3B8] text-xl  border border-[#334155] pl-2 focus:outline-none focus:ring-1 focus:ring-[rgba(56, 189, 248, 0.5)] transition-all duration-200 focus:shadow-xl focus:scale-[1.01]'
                    />
                    {/* the below div creates the horizontal line */}
                    <div className=' text-[#94A3B8] inline-grid grid-cols-[1fr_auto_1fr] items-center gap-3 mt-4'>
                        <hr />
                        <span>OR</span>
                        <hr />
                    </div>
                    
                    {/* div for self description */}
                    <div className='w-full flex flex-col gap-2'>
                        <label 
                            className='text-[#94A3B8] text-xl md:text-2xl flex items-center gap-2'
                            htmlFor="jd"
                        >   
                            Quick Self Description
                        </label>
                        <textarea 
                            name="summary" 
                            id="summary"
                            onChange={(e)=>(setSummary(e.target.value))}
                            value={summary}
                            placeholder='Enter Your Professional Summary'
                            className='text-[#94A3B8] text-xl  border border-[#334155] pl-2 focus:outline-none focus:ring-1 focus:ring-[rgba(56, 189, 248, 0.5)] transition-all duration-200 focus:shadow-xl focus:scale-[1.01] h-80'
                        ></textarea>
                    </div>

                </div>
            </div>
            {
                isLoading ? 
                <DisabledButton text={"Generating Report..."}/> 
                :
                <div className='w-full flex justify-center mt-6 mb-6'>
                    <Button 
                        text={"Generate Report"}
                        clickHandler={handleClick}
                    />
                </div>
            }
        </div>
    </div>
  )
}
