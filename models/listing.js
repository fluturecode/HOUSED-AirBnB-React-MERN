const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true
    },

    hostPicture: {
      type: String,
      trim: true,
      required: true
    },

    aboutHost: {
      type: String,
      trim: true,
      required: true
    },

    hostAge: {
      type: Number,
      trim: true,
      required: true
    },

    title: {
      type: String,
      trim: true,
      required: true
    },

    homeDescription: {
      type: String,
      required: true,
      trim: true
    },

    address: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    city: {
      type: String,
      required: true,
      lowercase: true
    },

    state: {
      type: String,
      required: true,
      lowercase: true
    },

    zipCode: {
      type: String,
      required: true
    },

    primaryImage: {
      type: String,
      required: true
    },

    secondImage: {
      type: String
    },

    thirdImage: {
      type: String
    },

    price: {
      type: String,
      required: true
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    booking_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Bookings'
    }
  },
  {
    timestamps: true
  }
);

const Listing = mongoose.model('Listings', listingSchema);

module.exports = Listing;
