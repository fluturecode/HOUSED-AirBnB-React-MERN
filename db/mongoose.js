if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const mongoose = require('mongoose');
try {
  mongoose.connect(`mongodb://127.0.0.1:27017/final`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
  console.log('Connected to MongoDB');
} catch (e) {
  console.log(e.toString());
}
