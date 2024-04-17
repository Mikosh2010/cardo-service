module.exports = class UserDto {
	id
	fullName
	username
	birthDate
	age
	school
	class
	roles


	constructor(model) {
		this.id = model._id
		this.fullName = model.fullName
		this.username = model.username
		this.birthDate = model.birthDate
		this.age = model.age
		this.school = model.school
		this.class = model.class
		this.roles = model.roles
	}
}
