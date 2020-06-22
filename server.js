if (process.env.NODE_ENV !== 'production') require('dotenv').config();
require('./db/mongoose');
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const listingRouter = require('./routes/listings');
const userRouter = require('./routes/users');
const bookingRouter = require('./routes/bookings');
// const mongoose = require('mongoose');
require('./db/mongoose');
// require('dotenv').config();

// const dotenv = require('dotenv');
// dotenv.config();

const app = require('./app');

app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file was uploaded.' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
//   })
//   .then(() => console.log('DB Connected'));
// mongoose.connection.on('error', err => {
//   console.log(`DB connection error: ${err.message}`);
// });

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use(listingRouter);
app.use(bookingRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});
