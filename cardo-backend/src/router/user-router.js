const { Router } = require('express')
const authMiddleware = require('../middlewares/auth-middleware.js')
const userController = require('../controllers/user-controller.js')
const userMiddleware = require('../middlewares/user-middleware.js')
const roleMiddleware = require('../middlewares/role-middleware.js')

const userRouter = new Router()

userRouter.get('', roleMiddleware(['TEACHER', 'ADMIN']), userController.getUsers)
userRouter.get('/:id', authMiddleware, userController.getUserById)
userRouter.put('', [userMiddleware, roleMiddleware('ADMIN')], userController.updateUser)
userRouter.delete('/:id', [userMiddleware, roleMiddleware('ADMIN')], userController.deleteUser)

module.exports = userRouter