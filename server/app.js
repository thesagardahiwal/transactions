const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const statistics = require('./routes/statictics');
const transactionList = require('./routes/transaction-list');
const priceRange = require('./routes/price-range');
const initialization = require('./routes/initialise');
const categories = require('./routes/categories');
const combined = require('./routes/combined');

app.use(cors());

const mongoURI = 'mongodb://localhost:27017/transaction';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });


app.use('/statistics', statistics);
app.use('/transactions', transactionList);
app.use('/price-range', priceRange);
app.use('/initialize-database', initialization);
app.use('/categories', categories);
app.use('/combined', combined);


app.listen(8080, () => {
    console.log("Server started listening on port 8080...");
});
