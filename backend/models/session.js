const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Question = require('./questions');

const Session = sequelize.define('Session', {
  session_id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  create_time: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  end_time: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  next_qu: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Question,
      key: 'qu_id',
    },
  },
}, {
  tableName: 'Sessions',
  timestamps: false,
});

// Establish the relationship with qu table 
Session.belongsTo(Question, { foreignKey: 'next_qu', as: 'nextQuestion' });

module.exports = Session;