const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const quizRoutes = require('./routes/quiz');
const sessionRoutes = require('./routes/session');
const cookieParser = require('cookie-parser');
const sessionMiddleware = require('./middlewares/session');
const Session = require('./models/session');
const Question = require('./models/questions');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/quiz', quizRoutes);
app.use('/api/session', sessionRoutes);

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
