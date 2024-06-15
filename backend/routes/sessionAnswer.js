const express = require('express');
const router = express.Router();
const SessionAnswer = require('../models/sessionAnswer');
const AnswerOption = require('../models/answerOption');
const Question = require('../models/question');

router.post('/answer', async (req, res) => {
  const { sess_id, answer_id } = req.body;
  if (!answer_id) {
    return res.status(400).json({ error: 'Answer ID is required' });
  }

  try {
    // Store the answer
    await SessionAnswer.create({ sess_id, answer_id });

    // Fetch the next question based on the answer_id
    const answerOption = await AnswerOption.findOne({ where: { answer_id } });
    const nextQuestion = await Question.findOne({ where: { qu_id: answerOption.next_qu } });

    res.json({ nextQuestionId: nextQuestion ? nextQuestion.qu_id : null });
  } catch (error) {
    console.error('Error submitting answer:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;