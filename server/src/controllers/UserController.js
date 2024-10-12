const { User } = require('../models');

// รับข้อมูลผู้ใช้ทั้งหมด
exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Internal Server Error');
    }
};

// สร้างผู้ใช้ใหม่
exports.createUser = async (req, res) => {
    const { username, email } = req.body;

    try {
        const newUser = await User.create({ username, email });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
    }
};
