const express = require('express')
const { authUser } = require('../middlewares/auth.middleware')
const router = express.Router()
const upload = require('../middlewares/fileUpload.middleware')
const {getInterviewReport, getResumeAnalysis} = require('../controllers/interview.controller')


router.post('/generateReport', authUser, upload.single('resume') ,getInterviewReport)

router.post("/analyse", authUser, getResumeAnalysis);

module.exports = router