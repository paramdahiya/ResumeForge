//imports
const resumeModel = require("../models/resume.model");

// upload resume
const uploadResume = async (req, res)=>{
    try {
        const {user, resumeContent} = req;

        const newResume = {userId:user.id, content:resumeContent};
        await resumeModel.create(newResume);

        return res.status(201).json({message:"Resume uploaded successfully."});
    } catch (error) {
        return res.status(500).json({message:"Failed to upload the resume"});
    }
}

module.exports = {uploadResume};