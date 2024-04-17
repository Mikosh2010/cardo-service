const { Schema, model } = require('mongoose')

const QuestionSchema = new Schema({
	title: { type: String, required: true },
	type: { type: String, enum: ['MULTIPLE_CHOICE', 'TRUE_FALSE', 'WRITE_ANSWER'], required: true },
	correctAnswer: { type: String, required: true }
})

module.exports = model('Question', QuestionSchema)