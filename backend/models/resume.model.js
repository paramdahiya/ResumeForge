// collection or user resumes

const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    score:{
        type:Number,
        default:null
    },
    clarity:{
        type:Number,
        default:null
    },
    atsScore:{
        type:Number,
        default:null
    },
    impact:{
        type:Number,
        default:null
    },
    numCriticalIssues:{
        type:Number,
        default:null
    },
    criticalIssues:{
        type:[String],
        default:null
    },
    overallAnalysis:{
        type:String,
        default:null
    },
    reviewSummary:{
        type:String,
        default:null
    },
    numWarnings:{
        type:Number,
        default:null,
    },
    warnings:{
        type:[String],
        default:null
    },
    strengths:{
        type:[String],
        default:null
    }

},{_id:false})

const resumeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required: true
    },
    content:{
        type:String,
        required: true,
    },
    analysis:{type:reviewSchema, default: ()=>({})}
})

const resumeModel = mongoose.model("resume", resumeSchema);
module.exports = resumeModel;