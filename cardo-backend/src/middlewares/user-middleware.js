const ApiError = require('../exceptions/api-error')
const tokenService = require('../service/token-service')

module.exports = (req, res, next) => {
	const token = req.headers.authorization
	if (!token) {
		return next(ApiError.Unauthourized())
	}

	const userData = tokenService.validateAccessToken(token)
	if (!userData) {
		return next(ApiError.Unauthourized())
	}

	if (userData.id !== req.params.id) {
		return next(ApiError.ForBidden())
	}

	next()
}