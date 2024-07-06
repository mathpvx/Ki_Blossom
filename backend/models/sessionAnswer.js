require('dotenv').config();
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const SessionAnswer = sequelize.define('SessionAnswer', {
  sess_id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  answer_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  }
}, {
  tableName: 'session_answer',
  timestamps: false
});

module.exports = SessionAnswer;
