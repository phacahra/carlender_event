const sequelize = require('../config/dbConfig');
const { DataTypes } = require('sequelize');

// โมเดล User
const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

// โมเดล Event
const Event = sequelize.define('Event', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    startTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

// สร้างความสัมพันธ์
User.hasMany(Event, { foreignKey: 'userId', as: 'events' });
Event.belongsTo(User, { foreignKey: 'userId', as: 'creator' });

sequelize.sync({ force: true }) // Use force: true only during development
    .then(() => console.log('Database synced successfully'))
    .catch(err => console.log('Error syncing database:', err));

module.exports = {
    sequelize,
    User,
    Event,
};
