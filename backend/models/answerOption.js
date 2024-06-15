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
  current_qu: {
    type: DataTypes.INTEGER,
  },
  reco_id: {
    type: DataTypes.INTEGER,
  },
  answer_button: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'answer_option',
  timestamps: false
});

module.exports = AnswerOption;
