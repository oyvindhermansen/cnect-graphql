const mongoose = require('mongoose');
const { mongoURI } = require('./keys');

async function dbConnect() {
  try {
    const connection = await mongoose.connect(
      mongoURI,
      { useNewUrlParser: true }
    );
    console.log(`Connected successfully to MongoDB`);
  } catch (error) {
    console.log(
      `Damn, something was wrong with your MongoDB connection. Make sure you have your environment variables correct!`
    );
  }
}

module.exports = dbConnect;
