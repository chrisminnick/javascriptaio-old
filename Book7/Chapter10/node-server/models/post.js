const mongoose = require('mongoose');

// Creating the post schema
const postSchema = mongoose.Schema({
  text: { type: String, required: true },
});

module.exports = mongoose.model('Post', postSchema);
