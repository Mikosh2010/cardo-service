const ClassDto = require('../dtos/class-dto')
const ClassModel = require('../models/class-model')
const classService = require('../service/class-service')

class ClassController {
	async getClassById(req, res, next) {
		try {
			const classModel = await classService.getClassById(req.params.id)
			return res.json(classModel)
		} catch (e) {
			next(e)
		}
	}

	async updateClass(req, res, next) {
		try {
			const classModel = await classService.updateClass(req.params.id)
			return res.json(classModel)
		} catch (e) {
			next(e)
		}
	}

	async deleteClass(req, res, next) {
		try {
			const classModel = await classService.deleteClass(req.params.id)
			return res.json({ success: true, message: 'Класс успешно удален' })
		} catch (e) {
			next(e)
		}
	}

	async addQuizToClass(req, res, next) {
		try {
			const classModel = await classService.addQuizToClass(req.body.quizId, req.body.classId)
			return res.json(classModel)
		} catch (e) {
			next(e)
		}
	}

	async addStudentToClass(req, res, next) {
		try {
			const classModel = await classService.addStudentToClass(req.body.studentId, req.body.classId)
			return res.json(classModel)
		} catch (e) {
			next(e)
		}
	}
}

module.exports = new ClassController()