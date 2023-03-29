const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: new Date().toISOString().slice(0, 10),
  },
});

const Idea = mongoose.model('Idea', IdeaSchema);

module.exports = Idea;
