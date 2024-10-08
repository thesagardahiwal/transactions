const express = require('express');
const router = express.Router();
const Transaction = require('../model/transaction');

router.get('/', async (req, res) => {
    const { month } = req.query;
  
    const priceRanges = [
      { range: '0-100', min: 0, max: 100 },
      { range: '101-200', min: 101, max: 200 },
      { range: '201-300', min: 201, max: 300 },
      { range: '301-400', min: 301, max: 400 },
      { range: '401-500', min: 401, max: 500 },
      { range: '501-600', min: 501, max: 600 },
      { range: '601-700', min: 601, max: 700 },
      { range: '701-800', min: 701, max: 800 },
      { range: '801-900', min: 801, max: 900 },
      { range: '901-above', min: 901, max: Infinity },
    ];
  
    try {
      const monthFilter = { $expr: { $eq: [{ $month: '$dateOfSale' }, parseInt(month)] } };
  
      const rangeCounts = await Promise.all(priceRanges.map(async (range) => {
        const count = await Transaction.countDocuments({
          ...monthFilter,
          price: { $gte: range.min, $lte: range.max === Infinity ? undefined : range.max },
        });
        return { range: range.range, count };
      }));
  
      res.json(rangeCounts);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching price ranges' });
    }
  });
  

  module.exports = router;