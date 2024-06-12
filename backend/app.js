const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const quizRoutes = require('./routes/quiz');
const Question = require('./models/questions');

const app = express();

app.use(bodyParser.json());
app.use('/api/quiz', quizRoutes);

// Sync Sequelize models with the database
// synchronize ORM with DB tables: create them
// if dont exist. 
sequelize.sync().then(() => {
  console.log('Database and tables synced');
}).catch(err => {
  console.error('Error syncing database:', err);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
