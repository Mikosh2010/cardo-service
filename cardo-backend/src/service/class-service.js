const ClassDto = require('../dtos/class-dto')
const ApiError = require('../exceptions/api-error')
const ClassModel = require('../models/class-model')
const UserModel = require('../models/user-model')

class ClassService {
	async getClassById(id) {
		if (!id) {
			throw ApiError.BadRequest('Укажите ID класса')
    }

		const classModel = await ClassModel.findById(id)
    if (!classModel) {
      throw ApiError.NotFound('Класс не найден')
    }

    return new ClassDto(classModel)
	}

	async updateClass(newClass) {
		if (!newClass.id) {
			throw ApiError.BadRequest('Укажите ID класса')
    }

		const classModel = await ClassModel.findByIdAndUpdate(newClass.id, newClass, { new: true })
    if (!classModel) {
      throw ApiError.NotFound('Класс не найден')
    }
		
    return new ClassDto(classModel)
	}

	async deleteClass(id) {
		if (!id) {
			throw ApiError.BadRequest('Укажите ID класса')
    }

		const classModel = await ClassModel.findByIdAndDelete(id)
    if (!classModel) {
      throw ApiError.NotFound('Класс не найден')
    }

    if (classModel.deletedCount < 1) {
      return false
    }
    
    return true
	}

	async addQuizToClass(quizId, classId) {
		if (!quizId || !classId) {
      throw ApiError.BadRequest('Укажите ID класса и ID вопроса')
    }

		const classModel = await ClassModel.findByIdAndUpdate(classId, { $push: { quizzes: [quizId] } }, { new: true })
    if (!classModel) {
      throw ApiError.NotFound('Класс не найден')
    }
    
    return new ClassDto(classModel)
  }

	async addStudentToClass(studentId, classId) {
		if (!studentId || !classId) {
      throw ApiError.BadRequest('Укажите ID класса и ID студента')
    }

		const student = UserModel.findById(studentId)
		if (!student) {
      throw ApiError.NotFound('Студент с таким ID не найден')
    }

		if (student.role !== 'USER') {
			throw ApiError.BadRequest('Роль пользователя не совпадает')
    }

		const classModel = await ClassModel.findByIdAndUpdate(classId, { $push: { students: [studentId] } }, { new: true })
    if (!classModel) {
      throw ApiError.NotFound('Класс не найден')
    }
    
    return new ClassDto(classModel)
  }
}

module.exports = new ClassService()