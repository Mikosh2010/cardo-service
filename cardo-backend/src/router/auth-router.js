const { Router } = require('express')
const { body } = require('express-validator')
const authController = require('../controllers/auth-controller')

const authRouter = new Router()

const fullNameRegex = /^[a-zA-Zа-яА-ЯёЁ'-]+(?: [a-zA-Zа-яА-ЯёЁ'-]+)?(?: [a-zA-Zа-яА-ЯёЁ'-]+)?$/

authRouter.post('/register', [
	body('fullName', 'Введите корректное ФИО').matches(fullNameRegex),
	body('username', 'Имя пользователя должно быть от 6 и до 32 символов').isLength({ min: 6, max: 32 }),
	body('password', 'Пароль должен быть от 8 символов').isLength({ min: 8 })
], authController.register)
authRouter.post('/login', authController.login)
authRouter.post('/logout', authController.logout)
authRouter.get('/refresh', authController.refresh)

module.exports = authRouter