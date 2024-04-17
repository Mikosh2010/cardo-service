const { Schema, model } = require('mongoose')

const QuizSchema = new Schema({
	class: { type: Schema.Types.ObjectId, ref: 'Class' },
	name: { type: String, required: true },
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
}, { timestamps: true })

module.exports = model('Quiz', QuizSchema)