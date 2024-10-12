const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig'); // Assuming you have a dbConfig file

class Event extends Model {}

Event.init({
    userId: {
        type: Sequelize.STRING,
        allowNull: false, // ต้องไม่เป็น null
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    startTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Event',
});

module.exports = Event;
