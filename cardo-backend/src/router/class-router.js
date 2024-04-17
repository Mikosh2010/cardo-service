const { Router } = require('express')
const userMiddleware = require('../middlewares/user-middleware.js')
const roleMiddleware = require('../middlewares/role-middleware.js')
const classController = require('../controllers/class-controller.js')

const classRouter = new Router()

classRouter.get('/:id', roleMiddleware(['TEACHER', 'ADMIN']), classController.getClassById)
classRouter.put('/:id', roleMiddleware(['TEACHER', 'ADMIN']), classController.updateClass)
classRouter.delete('/:id', roleMiddleware(['TEACHER', 'ADMIN']), classController.deleteClass)
classRouter.post('/addQuiz', roleMiddleware(['TEACHER', 'ADMIN']), classController.addQuizToClass)
classRouter.post('/addStudent', roleMiddleware(['TEACHER', 'ADMIN']), classController.addStudentToClass)


module.exports = classRouter