// import connection object
const db = require('../config/db');

// saves quiz answers into the quiz_answers table
exports.saveAnswers = (answers, callback) => {
  // insert a new record for answers where ? is a placeholder
  const query = 'INSERT INTO quiz_answers (answers) VALUES (?)';
  // runs the SQL query defined above 
  db.query(query, [JSON.stringify(answers)], callback);
};