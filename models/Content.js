const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  component: { type: String, required: true },
  text: { type: String, required: true }
});

module.exports = mongoose.model('Content', ContentSchema);
