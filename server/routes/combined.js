const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const { month } = req.query;
  
    try {
      const transactionsRes = await axios.get(`${req.protocol}://${req.get('host')}/transactions?month=${month}`);
      const statsRes = await axios.get(`${req.protocol}://${req.get('host')}/statistics?month=${month}`);
      const priceRes = await axios.get(`${req.protocol}://${req.get('host')}/price-range?month=${month}`);
      const categoriesRes = await axios.get(`${req.protocol}://${req.get('host')}/categories?month=${month}`);
  
      res.json({
        transactions: transactionsRes.data,
        statistics: statsRes.data,
        priceRange: priceRes.data,
        categories: categoriesRes.data,
      });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching combined data' });
    }
  });
  

  module.exports = router;