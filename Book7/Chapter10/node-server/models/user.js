// REST API server with login and CRUD operations for a social network app using mongoDB

// Importing the required modules
const mongoose = require('mongoose');

// Creating the user schema
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Exporting the model
module.exports = mongoose.model('User', userSchema);
