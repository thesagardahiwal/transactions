const express = require('express');
const router = express.Router();
const Transaction = require('../model/transaction');

router.get('/', async (req, res) => {
    const { month } = req.query;
  
    const monthFilter = { $expr: { $eq: [{ $month: '$dateOfSale' }, parseInt(month)] } };
  
    try {
      const categories = await Transaction.aggregate([
        { $match: monthFilter },
        { $group: { _id: '$category', count: { $sum: 1 } } },
      ]);
  
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching categories' });
    }
  });
  
  module.exports = router;