const axios = require('axios');
const express = require('express');
const router = express.Router();
const Transaction = require('../model/transaction');

router.get('/', async (req, res) => {
  try {
    const { data } = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    await Transaction.insertMany(data);
    res.json({ message: 'Database initialized with seed data!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = router;
