const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Dietetics = sequelize.define('Dietetics', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  img_url: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'dietetics',
  timestamps: false
});

module.exports = Dietetics;
