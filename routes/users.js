const express = require('express');
const router = new express.Router();
const User = require('../models/user');
const auth = require('../middleware/auth.js');
const bcrypt = require('bcryptjs');
const {
  sendWelcomeEmail,
  sendCancellationEmail,
  forgotPasswordEmail
} = require('../emails/account');

// Create a user
router.post('/api/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    sendWelcomeEmail(user.email, user.firstName);
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e.message);
  }
});
// Get current user
router.get('/api/users/me', auth, async (req, res) => {
  res.send(req.user);
});
// Update a User
router.patch('/api/users/me', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'firstName',
    'lastName',
    'email',
    'birthday',
    'phone',
    'gender',
    'description',
    'preferencesExchange'
  ];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }
  try {
    updates.forEach(update => (req.user[update] = req.body[update]));
    await req.user.save();
    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
});
// Delete a user
router.delete('/api/users/me', auth, async (req, res) => {
  try {
    await req.user.remove();
    sendCancellationEmail(req.user.email, req.user.name);
    res.send(req.user);
  } catch (e) {
    res.status(500).send();
  }
});
// Login a user
router.post('/api/users/login', async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
    console.log(e);
  }
});
// Logout a user
router.post('/api/users/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send({ message: 'Logged out!' });
  } catch (e) {
    res.status(500).send();
  }
});
// Reset Password Email Request
router.get('/users/password/forgot', async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email
    });
    forgotPasswordEmail(user.email, user.tokens[0].token, req.query.password);
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e.toString());
  }
});
// Reset Password
router.get('/api/users/password/reset', async (req, res) => {
  let newPassword = await bcrypt.hash(req.query.password, 8);
  const update = { password: newPassword };
  const filter = { email: req.query.email };
  const user = await User.findOne({
    email: req.query.email
  });
  try {
    if (user.tokens[0].token !== req.query.token) {
      throw new Error();
    }
    await User.findOneAndUpdate(filter, update);
    res.redirect('/');
  } catch (e) {
    res.status(400).send(e.toString());
  }
});
module.exports = router;
