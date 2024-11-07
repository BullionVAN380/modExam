// models/Moderation.js
const mongoose = require('mongoose');

const ModerationSchema = new mongoose.Schema({
  department: String,
  course: String,
  trainer: String,
  unit: String,
  level: Number,
  answers: [
    {
      guideline: String,
      answer: String,
      comment: String
    }
  ],
  submissionDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Moderation', ModerationSchema);
