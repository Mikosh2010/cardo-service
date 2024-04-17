const UserModel = require('../models/user-model')
const { compareSync, hash } = require('bcrypt')
const { v4 } = require('uuid')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')
const ApiError = require('../exceptions/api-error')

class UserService {

	async getAllUsers() {
		const users = await UserModel.find()
		return users
	}

	async getUserById(id) {
		if (!id) {
			throw ApiError.BadRequest('Укажите ID пользователя')
		}

		const user = await UserModel.findById(id)
		if (!user) {
			throw ApiError.NotFound('Пользователь не найден')
		}

		const userDto = new UserDto(user)
		return userDto
	}

	async updateUser(user) {
		if (!user.id) {
			throw ApiError.BadRequest('Укажите ID пользователя')
		}

		const updatedUser = await UserModel.findByIdAndUpdate(user.id, user, { new: true })
		if (!updatedUser) {
			throw ApiError.NotFound('Пользователь не найден')
		}

		return updatedUser
	}

	async deleteUser(id) {
		if (!id) {
			throw ApiError.BadRequest('Укажите ID пользователя')
		}

		const deletedUser = await UserModel.findByIdAndDelete(id)
		const token = await tokenService.removeToken(refreshToken)

		if (token.deletedCount < 1 || deletedUser.deletedCount < 1) {
			return false
		}

		return true
	}
}

module.exports = new UserService()
