const db = require('../config/db');

exports.saveAnswers = (answers, callback) => {
  const query = 'INSERT INTO quiz_answers (answers) VALUES (?)';
  db.query(query, [JSON.stringify(answers)], callback);
};