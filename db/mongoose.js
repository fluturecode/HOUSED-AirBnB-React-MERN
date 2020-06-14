if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const User = require('../models/user');

const mongoose = require('mongoose');
// const User = require('../models/user');

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
