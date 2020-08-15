const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
const auth = require('../middleware/auth');
const Booking = require('../models/booking');

// Create a booking
router.post('/api/bookings', auth, async (req, res) => {
  const booking = new Booking({
    ...req.body,
    guest: req.user._id
  });
  try {
    booking.save();
    const populatedBooking = await booking.execPopulate('listing_id');

    res.status(201).send(populatedBooking);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Update a booking
router.patch('/api/bookings/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['title', 'address', 'price', 'guest'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }
  try {
    const booking = await Booking.findOne({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!booking) {
      return res.status(404).send();
    }
    updates.forEach((update) => (booking[update] = req.body[update]));
    await booking.save();
    res.send(booking);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Get all Bookings
router.get('/api/bookings', auth, async (req, res) => {
  try {
    await req.user
      .populate({
        path: 'bookings',
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip)
        }
      })
      .execPopulate();
    res.send(req.user.bookings);
  } catch (e) {
    res.status(500).send();
  }
});

// Get a specific booking
router.get('/api/bookings/:id', auth, async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(400).send('Not a valid booking id');
  }
  try {
    const booking = await Booking.findOne({ _id, owner: req.user._id });
    if (!booking) {
      return res.status(404).send();
    }
    res.send(booking);
  } catch (e) {
    res.status(500).send();
  }
});

// Delete a booking
router.delete('/api/bookings/:id', auth, async (req, res) => {
  try {
    const booking = await Booking.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    });

    if (!booking) {
      res.status(404).send();
    }
    res.send(booking);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
