const generateInterviewReport = require('../services/gemini.service')
const {PDFParse} = require('pdf-parse')
const interviewReportModel = require('../models/interviewReport.model')

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
        return res.status(201).json({message:"Report created successfully"})

    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Failed to generate interview report"})
    }
}

module.exports = {getInterviewReport}