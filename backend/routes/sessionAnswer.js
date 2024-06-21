const express = require('express');
const router = express.Router();
const SessionAnswer = require('../models/sessionAnswer');
const AnswerOption = require('../models/answerOption');
const Question = require('../models/question');
const Recommendation = require('../models/recommendation');
const Dietetics = require('../models/dietetics');
const EssentialOil = require('../models/essentialOil');
const Food = require('../models/food');
const Plant = require('../models/plant');
const WbExercice = require('../models/wbExercice');
const Unhealthy = require('../models/unhealthy');

router.post('/answer', async (req, res) => {
  const { sess_id, answer_id } = req.body;
  if (!answer_id) {
    return res.status(400).json({ error: 'Answer ID is required' });
  }

  try {
    // Store the answer
    await SessionAnswer.create({ sess_id, answer_id });

    if (answer_id === 58 || answer_id === 59) {
      // Fetch all answers for the session
      const sessionAnswers = await SessionAnswer.findAll({
        where: { sess_id },
        include: [{
          model: AnswerOption,
          include: [{
            model: Recommendation,
            include: [
              { model: Dietetics, attributes: [ 'description', 'img_url'], as: 'Dietetics' },
              { model: EssentialOil, attributes: ['name', 'description', 'explanation', 'img_url'], as: 'EssentialOil' },
              { model: Food, attributes: ['name', 'description', 'explanation', 'img_url'], as: 'Food1' },
              { model: Food, attributes: ['name', 'description', 'explanation', 'img_url'], as: 'Food2' },
              { model: Plant, attributes: ['name', 'description', 'explanation', 'img_url'], as: 'Plant' },
              { model: WbExercice, attributes: ['name', 'description', 'explanation', 'img_url'], as: 'WbExercice' },
              { model: Unhealthy, attributes: ['name', 'risk', 'advice', 'img_url'], as: 'Unhealthy' }
            ]
          }]
        }]
      });

      const recommendations = sessionAnswers.reduce((acc, sessionAnswer) => {
        const { AnswerOption } = sessionAnswer;
        if (AnswerOption && AnswerOption.Recommendation) {
          const recommendation = AnswerOption.Recommendation;
          acc.push(recommendation);
        }
        return acc;
      }, []);

      return res.json({ nextQuestionId: null, recommendations });
    } else {
      // Fetch the answer option details with recommendations
      const answerOption = await AnswerOption.findOne({
        where: { answer_id },
        include: [
          {
            model: Recommendation,
            include: [
              { model: Dietetics, attributes: ['description', 'img_url'], as: 'Dietetics' },
              { model: EssentialOil, attributes: ['name', 'description', 'explanation', 'img_url'], as: 'EssentialOil' },
              { model: Food, attributes: ['name', 'description', 'explanation', 'img_url'], as: 'Food1' },
              { model: Food, attributes: ['name', 'description', 'explanation', 'img_url'], as: 'Food2' },
              { model: Plant, attributes: ['name', 'description', 'explanation', 'img_url'], as: 'Plant' },
              { model: WbExercice, attributes: ['name', 'description', 'explanation', 'img_url'], as: 'WbExercice' },
              { model: Unhealthy, attributes: ['name', 'risk', 'advice', 'img_url'], as: 'Unhealthy' }
            ]
          }
        ]
      });

      if (!answerOption) {
        return res.status(404).json({ error: 'Answer option not found' });
      }

      const nextQuestion = await Question.findOne({ where: { qu_id: answerOption.next_qu } });

      return res.json({
        nextQuestionId: nextQuestion ? nextQuestion.qu_id : null,
        recommendations: answerOption.Recommendations
      });
    }
  } catch (error) {
    console.error('Error submitting answer:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;