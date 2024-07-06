require('dotenv').config();
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

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
  },
}, {
  tableName: 'session',
  timestamps: false
});

module.exports = Session;