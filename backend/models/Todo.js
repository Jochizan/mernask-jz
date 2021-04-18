const mongoose = require('mongoose');
const Models = mongoose.Schema;

const TodoSchema = new Models({
  text: {
    type: String,
    required: true
  },
  finish: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Todos', TodoSchema);
