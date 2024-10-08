const express = require('express');
const router = express.Router();
const Transaction = require('../model/transaction');

router.get('/', async (req, res) => {
    const { page = 1, perPage = 10, search = '', month } = req.query;
    
    const monthFilter = month ? {
      $expr: { $eq: [{ $month: '$dateOfSale' }, parseInt(month)] }
    } : {};
    
    const searchFilter = search
      ? {
          $or: [
            { title: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
            { price: { $regex: search, $options: 'i' } },
          ],
        }
      : {};
  
    const filter = { ...monthFilter, ...searchFilter };
  
    try {
      const transactions = await Transaction.find(filter)
        .skip((page - 1) * perPage)
        .limit(parseInt(perPage));
  
      const total = await Transaction.countDocuments(filter);
  
      res.json({
        data: transactions,
        currentPage: page,
        totalPages: Math.ceil(total / perPage),
        totalTransactions: total,
      });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching transactions' });
    }
  });
  

  module.exports = router;