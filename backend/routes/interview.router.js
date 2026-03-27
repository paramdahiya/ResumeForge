const express = require('express')
const { authUser } = require('../middlewares/auth.middleware')
const router = express.Router()
const upload = require('../middlewares/fileUpload.middleware')
const {getInterviewReport} = require('../controllers/interview.controller')


router.post('/generateReport', authUser, upload.single('resume') ,getInterviewReport)

module.exports = router