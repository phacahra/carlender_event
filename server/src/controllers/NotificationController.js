const { Notification } = require('../models');

// ดึงการแจ้งเตือนทั้งหมด
exports.getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.findAll();
        res.json(notifications);
    } catch (error) {
        console.error('Error fetching notifications:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// สร้างการแจ้งเตือนใหม่
exports.createNotification = async (req, res) => {
    const { eventId, notificationTime } = req.body;

    // ตรวจสอบค่าที่ส่งเข้ามา
    if (!eventId || !notificationTime) {
        return res.status(400).json({ message: "Event ID and Notification Time are required." });
    }

    try {
        const newNotification = await Notification.create({ eventId, notificationTime });
        res.status(201).json(newNotification);
    } catch (error) {
        console.error('Error creating notification:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
