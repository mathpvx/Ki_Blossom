const uuid = require('uuid');
const express = require('express');
const router = express.Router();
const Session = require('../models/session');

// Route to start a quiz and generate a session ID
router.get('/start-quiz', async (req, res) => {
  try {
	// Generate a new session ID
    const sessionId = uuid.v4();
	// Store the session ID in the database
    await Session.create({ session_id: sessionId }); 
	// Store the session ID in a cookie
    res.cookie('session_id', sessionId, { httpOnly: true });
	// Respond with the session ID
    res.json({ sessionId });
  } catch (error) {
    console.error('Error starting quiz:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
