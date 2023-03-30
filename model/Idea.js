const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Please add a text field'],
  },
  tag: {
    type: String,
    required: [true, 'Please add a tag field'],
  },
  username: {
    type: String,
    required: [true, 'Please add the username field'],
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

const Idea = mongoose.model('Idea', IdeaSchema);

module.exports = Idea;
