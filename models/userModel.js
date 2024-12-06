const mongoose = require('mongoose');
const validator = require('validator');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User must have a name'],
        unique: false
    },
    IDNumber: {
        type: String,
        unique: true,
        required: [true, 'User must have an ID number']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
      },
      password: {
        type: String,
        required: [true, 'User must have a password']
      },
      passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
          // This only works on CREATE and SAVE!!!
          validator: function(el) {
            return el === this.password;
          },
          message: 'Passwords are not the same!'
        }        
      },
      phone: {
        type: String,
        unique: true,
        required: [true, 'User must validate a phone number'],
        match: [/^\d{10}$/, 'Please enter a valid phone number'],
      },
      dateOfBirth: {
        type: String,
        required: [true, 'User must provide date of birth']
      },
      role: {
        type: String,
        enum: ['user','admin'],
        default: 'user'
      }
});

const User = mongoose.model('User', userSchema);
module.exports = User;