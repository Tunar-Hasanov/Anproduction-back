const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect('mongodb+srv://Tunar:4B9mk9k3eWSNe4MS@cluster0.dxaqzlk.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to database');
  } catch (error) {
    console.error('Connection error', error);
  }
};

module.exports = connectDB;
