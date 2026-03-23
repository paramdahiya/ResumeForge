const mongoose = require('mongoose')


const technicalQuestionsSchema = new Mongoose.Schema({
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

const behavioralQuestionsSchema = new Mongoose.Schema({
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

const skillsGapSchema = new Mongoose.Schema({
    skill:{
        type:String, 
        required:true
    },
    severity:{
        type:String,
        enum:['low', 'medium', 'high']
    }
})

const taskSchema = new Mongoose.Schema({
    task:{
        type:String,
        required:true
    },
})


const preparationPlanSchema = new Mongoose.Schema({
    day:{
        type:Number,
        required:'true'
    },
    topic: {
        type:String,
        required:true,
    },
    tasks:[taskSchema]
})

const interviewReportSchema = new mongoose.Schema({
    jobDescription:{
        String,
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
    skillGaps:[skillsGapSchema],
    preparationPlan:[preparationPlanSchema]
})

// model for the report
const interViewReportModel = mongoose.model('interviewReport', interviewReportSchema)
module.exports = interViewReportModel