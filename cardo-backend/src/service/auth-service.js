const UserModel = require('../models/user-model')
const { compareSync, hash } = require('bcrypt')
const { v4 } = require('uuid')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')
const ApiError = require('../exceptions/api-error')
const RoleModel = require('../models/role-model.js')
const ClassModel = require('../models/class-model.js')

class AuthService {
	async register(user) {
		if (!user.fullName || !user.username || !user.password || !user.birthDate || !user.school || !user.className) {
			throw ApiError.BadRequest(`Заполните все поля`)
		}

		const candidate = await UserModel.findOne({ fullName: user.fullName, username: user.username })
		if (candidate) {
			throw ApiError.BadRequest(`Пользователь с таким именем уже существует`)
		}

		// Получаем возраст из даты рождения
		const userAge = new Date().getFullYear() - new Date(user.birthDate).getFullYear()

		if (user.roles && user.roles.includes('TEACHER') && userAge < 18 && userAge > 65) {
			throw ApiError.BadRequest('Вы не можете быть учителем.')
		}

		if (userAge > 65) throw ApiError.BadRequest('Укажите нормальную дату рождения.')

		const hashPassword = await hash(user.password, 3)

		if (!user.roles) user.roles = ['USER']



		let createdUser = await UserModel.create({
			fullName: user.fullName,
			username: user.username,
			password: hashPassword,
			birthDate: new Date(user.birthDate),
			age: userAge,
			school: user.school,
			roles: user.roles
		})

		if (user.roles.includes('TEACHER') && user.className && user.school) {
			const teacherClass = await ClassModel.create({ name: user.className, school: user.school, teacher: createdUser._id, students: [] })
			await UserModel.findByIdAndUpdate(createdUser._id, { $push: { createdClasses: [teacherClass._id], }, $set: { class: teacherClass._id } })
			createdUser = await UserModel.findById(createdUser._id)
		}

		const userDto = new UserDto(createdUser)
		console.log(userDto)
		const tokens = tokenService.generateTokens({ id: userDto.id, username: userDto.username, roles: userDto.roles })
		await tokenService.saveToken(userDto.id, tokens.refreshToken)

		return { ...tokens, user: userDto }
	}

	async login(user) {
		const existUser = await UserModel.findOne({ username: user.username })
		if (!existUser || !compareSync(user.password, existUser.password)) {
			throw ApiError.BadRequest('Неверный Username или пароль')
		}

		const userDto = new UserDto(existUser)
		const tokens = tokenService.generateTokens({
			id: userDto.id,
			username: userDto.username,
			roles: userDto.roles
		})

		await tokenService.saveToken(userDto.id, tokens.refreshToken)
		return { ...tokens, user: userDto }
	}

	async logout(refreshToken) {
		const token = await tokenService.removeToken(refreshToken)
		if (token.deletedCount > 1) {
			return 'Вы успешно вышли из аккаунта'
		} else {
			throw ApiError.BadRequest('Ошибка при выходе из аккаунта')
		}
	}

	async refresh(refreshToken) {
		if (!refreshToken) {
			throw ApiError.Unauthourized()
		}
		const userData = tokenService.validateRefreshToken(refreshToken)
		const tokenFromDb = await tokenService.findToken(refreshToken)
		if (!userData || !tokenFromDb) {
			throw ApiError.Unauthourized()
		}
		const user = await UserModel.findById(userData.id)
		const userDto = new UserDto(user)
		const tokens = tokenService.generateTokens({ ...userDto })

		await tokenService.saveToken(userDto.id, tokens.refreshToken)
		return { ...tokens, user: userDto }
	}
}

module.exports = new AuthService()
