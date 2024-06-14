const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const AnswerOption = sequelize.define('AnswerOption', {
  answer_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  next_qu: {
    type: DataTypes.INTEGER,
  },
  reco_id: {
    type: DataTypes.INTEGER,
  }
}, {
  tableName: 'answer_option',
  timestamps: false
});

module.exports = AnswerOption;