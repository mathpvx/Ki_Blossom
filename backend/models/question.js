require('dotenv').config();
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Question = sequelize.define('Question', {
  qu_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  qu_txt: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'question',
  timestamps: false
});

module.exports = Question;
