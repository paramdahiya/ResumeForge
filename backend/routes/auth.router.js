const {Router} = require('express')
const {registerUser, loginUser, userLogout, getMe} = require('../controllers/auth.controller')
const { authUser } = require('../middlewares/auth.middleware')
const router = Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', userLogout)
router.get('/get-me', authUser, getMe)

module.exports = router