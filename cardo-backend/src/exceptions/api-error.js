module.exports = class ApiError extends Error {
  status
  errors

  constructor(status, message, errors = []) {
    super(message)
    this.status = status
    this.errors = errors
  }

  static Unauthourized() {
    return new ApiError(401, 'Вы не авторизованы')
  }

  static BadRequest(message, errors = []) {
    return new ApiError(400, message, errors)
  }

  static NotFound(message) {
    return new ApiError(404, message)
  }

  static ForBidden() {
    return new ApiError(403, 'Нет доступа')
  }
}
