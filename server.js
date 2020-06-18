const express = require('express');
const fileUpload = require('express-fileupload');
const listingRoutes = require('./routes/listings');
const userRoutes = require('./routes/users');
const bookingRoutes = require('./routes/bookings');
const mongoose = require('mongoose');
require('./db/mongoose');

const app = express();

app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
  if(req.files === null){
    return res.status(400).json({ msg: 'No file was uploaded.'})
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if(err) {
      console.log(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});





const port = process.env.PORT || 8080;

app.use(express.json());

app.use(listingRoutes);
app.use(bookingRoutes);
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});
