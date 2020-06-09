if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const User = require('../models/user');

const mongoose = require('mongoose');
// const User = require('../models/user');

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

//this is just to test our models with compass/mongodb
const me = new User({
  name: 'Liz',
  age: 39
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log('Error!', error);
  });
