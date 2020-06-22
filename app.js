require('./db/mongoose');

const express = require('express');
const cors = require('cors');
const path = require('path');

// import routes
const userRouter = require('./routes/users');
const listingRouter = require('./routes/listings');
const bookingRouter = require('./routes/bookings');

const app = express();
app.use(cors());
app.use(express.json());

// Call routes
app.use(userRouter);
app.use(listingRouter);
app.use(bookingRouter);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
module.exports = app;
