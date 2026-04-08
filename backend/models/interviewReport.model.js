const mongoose = require('mongoose')


const technicalQuestionsSchema = new mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    intent:{
        type: String,
        required:true
    },
    answer:{
        type:String,
        required:true
    },
},
    {
        _id:false // no id will be created for the questions
    }
)

const behavioralQuestionsSchema = new mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    intent:{
        type: String,
        required:true
    },
    answer:{
        type:String,
        required:true
    },
},
    {
        _id:false // no id will be created for the questions
    }
)

const skillsGapSchema = new mongoose.Schema({
    skill:{
        type:String, 
        required:true
    },
    severity:{
        type:String,
        enum:['low', 'medium', 'high']
    }
})

const preparationPlanSchema = new mongoose.Schema({
    day:{
        type:Number,
        required:true
    },
    topic: {
        type:String,
        required:true,
    },
    tasks:[{
        taskNumber: Number,
        description: String
    }]
},
    {  
        _id:false // no id will be created for the questions
    }
)

const interviewReportSchema = new mongoose.Schema({
    jobDescription:{
        type: String,
        required:[true, 'Job description is required']
    },
    resume: {
        type: String,
    },
    selfDescription:{
        type:String
    },
    matchScore:{
        type:Number,
        min:0,
        max:100
    },
    technicalQuestions:[technicalQuestionsSchema],
    behavioralQuestions: [behavioralQuestionsSchema],
    skillsGap:[skillsGapSchema],
    preparationPlan:[preparationPlanSchema],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})

// model for the report
const interViewReportModel = mongoose.model('interviewReport', interviewReportSchema)
module.exports = interViewReportModel