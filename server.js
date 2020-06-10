const express = require('express');
const listingRoutes = require('./routes/listings')
const userRoutes = require('./routes/users')
const mongoose = require('mongoose')
require('./db/mongoose');

const app = express();
const port = process.env.PORT || 8080;


app.use(express.json());
app.use(listingRoutes)

app.use(userRoutes)

app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});
