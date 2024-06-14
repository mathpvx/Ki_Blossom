const express = require('express');
const router = express.Router();
const Questions = require('../models/questions'); 
const sequelize = require('../config/db'); 

router.get('/questions', async (req, res) => {
  try {
    // get a random row 
    const question = await Questions.findOne();
    if (!question) {
      return res.status(404).json({ error: 'No question found' });
    }
    res.json(question); // Match the variable name
  } catch (error) {
    console.error('Error fetching question:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;