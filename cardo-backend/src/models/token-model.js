const { Schema, model } = require('mongoose')

const TokenSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  roles: [{ type: String, ref: 'Role' }],
  refreshToken: { type: String, required: true },
})

module.exports = model('Token', TokenSchema)
