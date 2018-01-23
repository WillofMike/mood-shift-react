const mongoose = require("mongoose")
const uuid = require('uuid')
const model = 'token'

const schema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  token: {
    type: String,
    default: uuid(),
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model(model, schema)
