const express = require('express');
const router = express.Router();
const SessionAnswer = require('../models/sessionAnswer');

router.post('/answer', async (req, res) => {
  const { sess_id, answer_id } = req.body;

  try {
    // Insert the new session answer record into the database
    await SessionAnswer.create({ sess_id, answer_id });
    res.status(201).json({ message: 'Answer recorded successfully' });
  } catch (error) {
    console.error('Error recording answer:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;