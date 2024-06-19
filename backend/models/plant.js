const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Plant = sequelize.define('Plant', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  explanation: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  img_url: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'plant',
  timestamps: false
});

module.exports = Plant;
