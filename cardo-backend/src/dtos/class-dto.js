module.exports = class ClassDto {
	id
	name
	school
	teacher
	students
	quizzes

	constructor(model) {
		this.id = model._id
    this.name = model.name
    this.school = model.school
    this.teacher = model.teacher
    this.students = model.students
    this.quizzes = model.quizzes
	}
}