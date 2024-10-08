const express = require('express');
const router = express.Router();
const Transaction = require('../model/transaction');

router.get('/', async (req, res) => {
    const { month } = req.query;
    
    const monthFilter = { $expr: { $eq: [{ $month: '$dateOfSale' }, parseInt(month)] } };
  
    try {
      const totalSale = await Transaction.aggregate([
        { $match: monthFilter },
        { $group: { _id: null, total: { $sum: '$price' } } },
      ]);
  
      const soldItems = await Transaction.countDocuments({ ...monthFilter, sold: true });
      const notSoldItems = await Transaction.countDocuments({ ...monthFilter, sold: false });
  
      res.json({
        totalSaleAmount: totalSale[0]?.total || 0,
        totalSoldItems: soldItems,
        totalNotSoldItems: notSoldItems,
      });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching statistics' });
    }
  });
  
  module.exports = router;