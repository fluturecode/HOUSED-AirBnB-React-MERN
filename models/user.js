const mongoose = require('mongoose');
const validator = require('validator');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const Listing = require('./listing');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    lastName: {
      type: String,
      required: true,
      trim: true
    },

    birthday: {
      type: Date,
      required: true,
      trim: true,
      format: date - time
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid.');
        }
      }
    },

    phone: {
      type: number,
      maxLength: 10,
      required: true
    },

    password: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes('password')) {
          throw new Error("Password can't be password.");
        }

        if (value.length < 8) {
          throw new Error('Password must be at least 8 characters long.');
        }
      }
    },

    isHost: {
      type: Boolean,
      validate(value) {
        const { isGuest } = this;
        if (!isGuest && !value) {
          throw new Error('Must pick either Host or Guest.');
        }
      }
    },

    isGuest: {
      type: Boolean,
      validate(value) {
        const { isHost } = this;
        if (!isHost && !value) {
          throw new Error('Must pick either Host or Guest.');
        }
      },

      gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
      },

      description: {
        type: String,
        trim: true,
        required: true,
        validate(value) {
          if (value.length > 250) {
            throw new Error('Description may not be over 250 characters.');
          }
        }
      },

      preferencesExchange: {
        type: String,
        enum: ['Pay', 'Work', 'Both']
      },

      listing_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing'
      }
    },
    license: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
