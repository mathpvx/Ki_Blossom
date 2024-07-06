require('dotenv').config();
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Recommendation = sequelize.define('Recommendation', {
  reco_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  unhealthy_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'unhealthy',
      key: 'id'
    }
  },
  exo_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'wb_exercice',
      key: 'id'
    }
  },
  food_id1: {
    type: DataTypes.INTEGER,
    references: {
      model: 'food',
      key: 'id'
    },
    as: 'Food1'
  },
  food_id2: {
    type: DataTypes.INTEGER,
    references: {
      model: 'food',
      key: 'id'
    },
    as: 'Food2'
  },
  plant_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'plant',
      key: 'id'
    }
  },
  eo_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'essential_oil',
      key: 'id'
    }
  },
  diet_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'dietetics',
      key: 'id'
    }
  }
}, {
  tableName: 'recommendation',
  timestamps: false
});

module.exports = Recommendation;