const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true}
});

module.exports = mongoose.model('Course', courseSchema)