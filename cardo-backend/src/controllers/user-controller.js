const userService = require('../service/user-service')
const { validationResult } = require('express-validator')
const ApiError = require('../exceptions/api-error')

class UserController {
  async getUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers()
      return res.json(users)
    } catch (e) {
      next(e)
    }
  }

  async getUserById(req, res, next) {
    try {
      const user = await userService.getUserById(req.params.id)
      return res.json(user)
    } catch (e) {
      next(e)
    }
  }

  async updateUser(req, res, next) {
    try {
      const user = await userService.updateUser(req.body)
      return res.json(user)
    } catch (e) {
      next(e)
    }
  }

  async deleteUser(req, res, next) {
    try {
      const deletedUser = await userService.deleteUser(req.params.id)
      if (deletedUser) {
        return res.json({ success: true, message: "Пользователь успешно удалён!" })
      }
    } catch (e) {
      next(e)
    }
  }
}


module.exports = new UserController()
