require('dotenv').config();
const mongoose = require('mongoose');
const DB_URI = process.env.DB_URI;

const connectDB = async () => {
  try {
    mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connect success mongoDB');
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
