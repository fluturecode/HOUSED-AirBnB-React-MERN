const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true
    },

    description: {
      type: String,
      required: true,
      trim: true
    },

    address: {
      type: String,
      require: true
    },

    images: {
      type: String,
      require: true
    },

    price: {
      type: Number,
      require: true
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

const Listing = mongoose.model('Listing', ListingSchema);

module.exports = Listing;
