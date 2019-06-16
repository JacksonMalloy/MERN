//We need to create a schema which holds the different fields we want this resource to have
const mongoose = require('mongoose');

//Takes an object with all the fields we want
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    //don't want more than 1 person to register same email
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    //gravatar allows you to attach a profile img to your email
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);
