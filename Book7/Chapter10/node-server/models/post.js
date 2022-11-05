// REST API server with login and CRUD operations for a social network app using mongoDB

// Importing the required modules
const mongoose = require('mongoose');

// Creating the post schema
const postSchema = mongoose.Schema({
  text: { type: String, required: true },
});

// Exporting the model
module.exports = mongoose.model('Post', postSchema);
