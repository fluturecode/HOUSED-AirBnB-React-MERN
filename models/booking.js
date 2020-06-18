const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: ['INFO_REQUESTED', 'REQUESTED', 'CONFIRMED'],
      required: true,
      default: 'INFO_REQUESTED'
    },

    listing_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Listings'
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

const Booking = mongoose.model('Bookings', bookingSchema);

module.exports = Booking;
