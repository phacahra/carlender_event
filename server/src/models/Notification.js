const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Notification = sequelize.define('Notification', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    eventId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    notificationTime: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports = Notification;
