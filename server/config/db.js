const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/estokkyam';

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    console.error('API routes that need the database will not work until MongoDB is running.');
  }
};

module.exports = connectDB;
