const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true
    },

    address: {
      type: String,
      required: true
    },

    listing_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Listing'
    },

    price: {
      type: Number,
      required: true
    },

    guest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },

  {
    timestamps: true
  }
);

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
