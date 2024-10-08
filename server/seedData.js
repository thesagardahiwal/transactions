const axios = require('axios');
const mongoose = require('mongoose');
const Transaction = require('./model/transaction');  // No need to add .js in CommonJS

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/transaction';  // Use your MongoDB URI

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected');
    fetchData();
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Fetch and insert data
const fetchData = async () => {
  try {
    const { data } = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    console.log('Fetched data:', data.length, 'items');

    // Insert data into MongoDB
    await Transaction.insertMany(data);
    console.log("Data Inserted Successfully!");
  } catch (error) {
    console.log('Error during data insertion:', error.message);
  }
};

fetchData();
