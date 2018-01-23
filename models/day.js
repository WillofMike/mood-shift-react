const mongoose = require("mongoose")
const model = 'day'
const moods = [
  'happy',
  'sad',
  'anxious',
  'mad',
  'neutral'
];

const schema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
},
  morningMood: {
    type: String,
    enum: moods,
  },
  afternoonMood: {
    type: String,
    enum: moods,
  },
  nightMood: {
    type: String,
    enum: moods,
  },
  nightReflection: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  }
})

module.exports = mongoose.model(model, schema)
