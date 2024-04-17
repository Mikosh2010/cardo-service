const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  fullName: { type: String, required: true },
  username: { type: String, unique: true },
  birthDate: { type: Date, required: true },
  age: { type: Number, required: true },
  password: { type: String, required: true },
  school: { type: String, required: true },
  class: { type: Schema.Types.ObjectId, ref: 'Class' },
  createdClasses: [{ type: Schema.Types.ObjectId, ref: 'Class' }],
  finishedQuizzes: [{ type: Schema.Types.ObjectId, ref: 'Quiz' }],
  roles: [{ type: String, ref: 'Role' }]
}, { timestamps: true })

module.exports = model('User', UserSchema)
