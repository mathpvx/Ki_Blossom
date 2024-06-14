const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const AnswerOptions = sequelize.define('AnswerOptions', {
	answer_id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	}
}, {
	tableName: 'answer_options',
	timestamps: false
});

module.exports = AnswerOptions;
