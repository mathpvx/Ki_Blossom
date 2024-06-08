const Quiz = require('../models/quizModel');

exports.submitQuiz = (req, res) => {
  const { answers } = req.body;
  Quiz.saveAnswers(answers, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send('Quiz answers saved successfully');
  });
};
