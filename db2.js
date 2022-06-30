const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cac_22005', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

module.exports = sequelize;