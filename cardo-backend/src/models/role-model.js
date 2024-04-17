const { Schema, model } = require('mongoose')

const RoleSchema = new Schema({
	value: { type: String, default: 'USER', unique: true, enum: ['USER', 'TEACHER', 'ADMIN'] },
})

module.exports = model('Role', RoleSchema)