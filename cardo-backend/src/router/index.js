
const Router = require('express').Router
const authRouter = require('./auth-router.js')
const classRouter = require('./class-router.js')
const userRouter = require('./user-router.js')

const router = new Router()

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/class', classRouter)

module.exports = router