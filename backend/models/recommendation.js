const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Recommendation = sequelize.define('Recommendation', {
  reco_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
}, {
  tableName: 'recommendation',
  timestamps: false
});

module.exports = Recommendation;