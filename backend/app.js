// entrypoint to the backend

const express = require('express');
// parse from JSON to js object before handlers
const bodyParser = require('body-parser');
const db = require('./config/db');
const quizRoutes = require('./routes/quiz');

const app = express();

app.use(bodyParser.json());
app.use('/api/quiz', quizRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});