const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './event-calendar-db.sqlite'
});

module.exports = sequelize;
