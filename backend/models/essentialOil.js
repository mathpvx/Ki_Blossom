require('dotenv').config();
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const EssentialOil = sequelize.define('EssentialOil', {
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
  tableName: 'essential_oil',
  timestamps: false
});

module.exports = EssentialOil;
