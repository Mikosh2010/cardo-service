const tokenService = require('../service/token-service.js')

module.exports = (roles) => {
	return (req, res, next) => {
		if (req.method === 'OPTIONS') next()
		
		const token = req.headers.authorization.split(' ')[1]
		if (!token) {
			return res.status(401).json({ message: 'Пользователь не авторизован' })
		}

		try {
			const { roles: userRoles } = tokenService.validateAccessToken(token)

			let hasRole = false
			userRoles.forEach(role => {
				if (roles.includes(role))	hasRole = true
			})

			if (!hasRole) {
				return res.status(403).json({ message: 'Нет доступа' })
			}

			next()
		} catch (error) {
			console.log(error)
			return res.status(401).json({ message: 'Пользователь не авторизован' })
		}
	}
}