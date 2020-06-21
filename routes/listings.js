const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
const auth = require('../middleware/auth');
const Listing = require('../models/listing');

// Create a listing
router.post('/api/listings', auth, async (req, res) => {
  const listing = new Listing({
    ...req.body,
    owner: req.user._id
  });
  try {
    await listing.save();
    res.status(201).send(listing);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Update a listing
router.patch('/api/listings/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['title', 'description', 'address', 'images', 'price'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }
  try {
    const listing = await Listing.findOne({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!listing) {
      return res.status(404).send();
    }
    updates.forEach((update) => (listing[update] = req.body[update]));
    await listing.save();
    res.send(listing);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Get all listings
router.get('/api/listings', async (req, res) => {
  try {
    await Listing.find()
      .exec()
      .then((result) => {
        res.status(200).json(result);
      });
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

// Get a specific listing
router.get('/api/listings/:id', async (req, res) => {
  const id = req.params.id;

  try {
    await Listing.findById({ _id: id })
      .exec()
      .then((result) => {
        res.status(200).json(result);
      });
  } catch (error) {
    res.status(500).json({ message: e });
  }
});

//Search listings by City

router.get('/api/listings/search/:city', async (req, res) => {
  console.log('hi!');
  const currentCity = req.params.city;
  console.log(currentCity);
  try {
    console.log('insdie Try');
    let listings = await Listing.find();
    listings = listings.filter((listing) => listing.city === currentCity);
    console.log(listings);
    res.json(listings);
  } catch (err) {
    res.json({ err });
  }
});

// Delete a listing
router.delete('/api/listings/:id', auth, async (req, res) => {
  try {
    const listing = await Listing.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    });

    if (!listing) {
      res.status(404).send();
    }
    res.send(listing);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
