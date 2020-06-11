const mongoose = require('mongoose');
const validator = require('validator');
const moment = require('moment');
const Listings = require('./listings');
// we're currently not calling Bookings
const Bookings = require('./bookings');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },

    // Date is giving back a -1 day.
    birthday: {
      type: Date,
      required: true,
      trim: true,
      format: Date
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
      type: Number,
      maxlength: 10,
      minlength: 10,
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

    //should default to Guest, if not then host.
    isHost: {
      type: Boolean,
      required: true
    },

    //Should return to Captital letter
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
    // Return Capital Letter
    preferencesExchange: {
      type: String,
      enum: ['Pay', 'Work', 'Both']
    },

    // Do we need or will we have an ID already created by Database model?
    listing_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Listings'
    },
    // Do we need or will we have an ID already created by Database model?
    booking_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Bookings'
    },
    // Are we really gonna use this? If so where do we build the logic for the image it accepts.
    license: {
      type: String,
      required: true
    },

    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ],

    avatar: {
      type: Buffer
    }
    // you can put it as a type of "String" must be a url if so
  },

  {
    timestamps: true
  }
);

// Create relation betwen user and listing
userSchema.virtual('listings', {
  ref: 'Listings',
  localField: '_id',
  foreignField: 'owner'
});

// Create relation betwen user and booking
userSchema.virtual('bookings', {
  ref: 'Bookings',
  localField: '_id',
  foreignField: 'guest'
});

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  delete userObject.avatar;
  return userObject;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, {
    expiresIn: '7 days'
  });

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

// find user by email and password
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Unable to log in.');
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Unable to login.');
  }
  return user;
};

// This mongoose middleware will hash our user's passwords whenever a user is created or a user password is updated.
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

// Delete user listing when user is removed.
userSchema.pre('remove', async function (next) {
  const user = this;
  await Listings.deleteMany({
    owner: user._id
  });
  next();
});

// Format the date sent back by mongo
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  if (userObject.birthday) {
    userObject.birthday = moment(userObject.birthday).format('YYYY-MM-DD');
  }
  return userObject;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
