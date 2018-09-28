const mongoose = require('mongoose');

const subcSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true},
  uni: {type: String, required: true},
  course_id: {type: String, required: true}
});

module.exports = mongoose.model('Subcourse', subcSchema)
