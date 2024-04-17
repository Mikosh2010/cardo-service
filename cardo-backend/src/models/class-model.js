const { Schema, model } = require('mongoose')

const ClassSchema = new Schema({
	name: { type: String, required: true },
	school: { type: String, required: true },
	teacher: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  students: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	quizzes: [{ type: Schema.Types.ObjectId, ref: 'Quiz' }],
}, { timestamps: true })

module.exports = model('Class', ClassSchema)