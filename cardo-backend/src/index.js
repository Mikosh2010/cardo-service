require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { connect } = require('mongoose')
const router = require('./router/index')
const errorMiddleware = require('./middlewares/error-middleware')
const RoleModel = require('./models/role-model')

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
	credentials: true,
	origin: process.env.CLIENT_URL
}))
app.use('/api', router)
app.use(errorMiddleware)

const start = async () => {
	try {
		await connect(process.env.DB_URL)

		if (!RoleModel.find()) {
			await RoleModel.create({ value: "USER" })
			await RoleModel.create({ value: "TEACHER" })
			await RoleModel.create({ value: "ADMIN" })
		}

		app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}. Origin: ${process.env.API_URL}`))
	} catch (e) {
		console.log(e)
	}
}

start()
