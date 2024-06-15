const express = require('express');
const router = express.Router();
const Question = require('../models/question');
const AnswerOption = require('../models/answerOption');

router.get('/questions', async (req, res) => {
  try {
    const questionId = req.query.qu_id || 1;
    const question = await Question.findOne({ where: { qu_id: questionId } });
    const answerOptions = await AnswerOption.findAll({ where: { current_qu: questionId } });

    res.json({
      qu_txt: question.qu_txt,
      answerOptions: answerOptions.map(option => ({
        answer_id: option.answer_id,
        answer_button: option.answer_button,
      })),
    });
  } catch (error) {
    console.error('Error fetching question:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
