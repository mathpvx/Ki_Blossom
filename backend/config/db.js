const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ki_blossom', 'root', 'the_final_p@ssw0rd', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

module.exports = sequelize;
