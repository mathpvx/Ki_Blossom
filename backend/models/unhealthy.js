const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Unhealthy = sequelize.define('Unhealthy', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  risk: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  advice: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  img_url: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'unhealthy',
  timestamps: false
});

module.exports = Unhealthy;
