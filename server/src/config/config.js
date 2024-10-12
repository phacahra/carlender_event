module.exports = {
    port: 8080,
    db: {
        database: process.env.DB_NAME || 'event-calendar',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            storage: './event-calendar-db.sqlite'
        },
    },
    authentication: {
        jwtSecret: "test"
    }
};
