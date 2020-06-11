const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
const auth = require('../middleware/auth');

const Booking = require('../models/booking');

// Get all Bookings
router.get('/bookings', auth, async (req, res) => {
  try {
    await req.user
      .populate({
        path: 'bookings',
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort
        }
      })
      .execPopulate();
    res.send(req.user.listings);
  } catch (e) {
    res.status(500).send();
  }
});

// Get a specific booking
router.get('/bookings/:id', auth, async (req, res) => {
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

// Create a booking
router.post('/bookings', auth, async (req, res) => {
  const booking = new Booking({
    ...req.body,
    owner: req.user._id
  });
  try {
    booking.save();
    res.status(201).send(booking);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Update a booking
router.patch('/bookings/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['title', 'description', 'address', 'images', 'price'];
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

// Delete a booking
router.delete('/bookings/:id', auth, async (req, res) => {
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
