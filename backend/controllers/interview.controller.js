const {generateInterviewReport , analyseResume} = require('../services/gemini.service')
const {PDFParse} = require('pdf-parse')
const interviewReportModel = require('../models/interviewReport.model')
const userModel = require("../models/user.model")

const getInterviewReport = async (req, res)=>{

    try {
        // send jd, resume || self description
        const parser = new PDFParse({data: req.file.buffer})
        const resume = await parser.getText()
        const resumeText = resume.text
        await parser.destroy();
        
        const {jobDescription, selfDescription} = req.body
    
        const report = await generateInterviewReport({resume:resumeText, jd:jobDescription, sd:selfDescription})
        
        await interviewReportModel.create({
                user: req.user._id,
                resume : resumeText,
                jobDescription,
                selfDescription,
                ...report
            })
        return res.status(201).json({message:"Report created successfully", report})

    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Failed to generate interview report"})
    }
}

const getResumeAnalysis = async (req, res)=>{
    // check if the user has uploaded a resume before
    try {
        // get the user from the db
        const user = await userModel.findById(req.user.id)
        const resume = user.resumeText
        
        if (!resume){
            res.status(400).json({message:"No resume found for analysis."});
        }

        // call the gemini api to review the resume
        await analyseResume({resume});
        
        return res.status(200).json({message:"api worked"});

    } catch (error) {
        
    }

}

module.exports = {getInterviewReport, analyseResume}