// Import required modules
const express = require('express');
const router = express.Router();
const Question = require('../models/question');
const AnswerOption = require('../models/answerOption');

// Route to get a question and its answer options
router.get('/questions', async (req, res) => {
  try {
    // Get the question ID from the query parameters, default to 1 if not provided
    const questionId = req.query.qu_id || 1;

    // Find the question with the specified ID
    const question = await Question.findOne({ where: { qu_id: questionId } });

    // Find all answer options related to the current question
    const answerOptions = await AnswerOption.findAll({ where: { current_qu: questionId } });

    // Respond with the question text and the mapped answer options
    res.json({
      qu_txt: question.qu_txt,
      answerOptions: answerOptions.map(option => ({
        answer_id: option.answer_id,
        answer_button: option.answer_button,
      })),
    });
  } catch (error) {
    // Log the error and respond with a 500 status code and error message
    console.error('Error fetching question:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Export the router to be used in other parts of the application
module.exports = router;
