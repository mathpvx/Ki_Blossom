require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const quizRoutes = require('./routes/quiz');
const sessionRoutes = require('./routes/session');
const sessionAnswerRoutes = require('./routes/sessionAnswer');
const sessionMiddleware = require('./middlewares/session');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// import models
const Question = require('./models/question');
const Session = require('./models/session');
const SessionAnswer = require('./models/sessionAnswer');
const AnswerOption = require('./models/answerOption');
const Recommendation = require('./models/recommendation.js');
const WbExercice = require('./models/wbExercice');
const Unhealthy = require('./models/unhealthy');
const Plants = require('./models/plant');
const EssentialOil = require('./models/essentialOil');
const Dietetics = require('./models/dietetics');
const Food = require('./models/food');
require('./models/associations');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/quiz', quizRoutes);
app.use('/api/session', sessionRoutes);
app.use('/api/session-answer', sessionAnswerRoutes);

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
