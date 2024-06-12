const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Questions = sequelize.define('Question', {
	qu_id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	qu_txt: {
		type: DataTypes.STRING,
		allowNull: false
	}
});

module.exports = Questions;
