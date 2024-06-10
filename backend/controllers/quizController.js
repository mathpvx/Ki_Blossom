// import saveAnswers method
const Quiz = require('../models/quizModel');

// route handler for HTTP POST req
exports.submitQuiz = (req, res) => {
  const { answers } = req.body;
  Quiz.saveAnswers(answers, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send('Quiz answers saved successfully');
  });
};

