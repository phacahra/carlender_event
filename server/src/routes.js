const express = require("express");
const multer = require("multer");
const { Event, Notification } = require("./models"); // นำเข้าโมเดล Event และ Notification
const EventController = require('../controllers/EventController');

// Get all events
router.get('/events', EventController.getAllEvents);

// Create new event
router.post('/events', EventController.createEvent);

// ตั้งค่า multer สำหรับการอัปโหลดไฟล์
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/uploads"); // ตั้งค่าที่อยู่สำหรับจัดเก็บไฟล์
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // เพิ่ม timestamp เพื่อหลีกเลี่ยงชื่อไฟล์ซ้ำ
    },
});

const upload = multer({ storage }).single("image"); // อัปโหลดไฟล์เป็นรูปแบบเดียว

module.exports = (app) => {
    // เส้นทางสำหรับกิจกรรม
    app.get("/api/events", async (req, res) => {
        try {
            const events = await Event.findAll(); // ดึงข้อมูลกิจกรรมทั้งหมด
            res.json(events); // ส่งข้อมูลกลับไปยังผู้ใช้
        } catch (error) {
            console.error("Error fetching events:", error);
            res.status(500).json({ message: "Internal Server Error" }); // ส่งข้อความข้อผิดพลาดในรูปแบบ JSON
        }
    });

    app.post("/api/events", upload, async (req, res) => {
        const { title, description, startTime, endTime, userId } = req.body; // รับข้อมูลจากฟอร์ม

        let imagePath = '';

        if (req.file) {
            imagePath = req.file.filename; // ตรวจสอบว่ามีไฟล์หรือไม่
        }

        // ตรวจสอบค่าที่ส่งเข้ามา
        if (!title || !startTime || !endTime || !userId) {
            return res.status(400).json({ message: "Title, Start Time, End Time, and User ID are required." });
        }

        try {
            const newEvent = await Event.create({
                id,
                title,
                startTime,
                endTime,
            });
            res.status(201).json(newEvent); // ส่งข้อมูลกิจกรรมใหม่กลับไปยังผู้ใช้
        } catch (error) {
            console.error("Error creating event:", error);
            res.status(500).json({ message: "Internal Server Error" }); // ส่งข้อความข้อผิดพลาด
        }
    });

    // เส้นทางสำหรับการแจ้งเตือน
    app.get("/api/notifications", async (req, res) => {
        try {
            const notifications = await Notification.findAll(); // ดึงข้อมูลการแจ้งเตือนทั้งหมด
            res.json(notifications); // ส่งข้อมูลกลับไปยังผู้ใช้
        } catch (error) {
            console.error("Error fetching notifications:", error);
            res.status(500).json({ message: "Internal Server Error" }); // ส่งข้อความข้อผิดพลาด
        }
    });

    app.post("/api/notifications", async (req, res) => {
        const { eventId, notificationTime } = req.body; // รับข้อมูลการแจ้งเตือน

        try {
            // ตรวจสอบค่าที่ส่งเข้ามา
            if (!eventId || !notificationTime) {
                return res.status(400).json({ message: "Event ID and Notification Time are required." });
            }

            const newNotification = await Notification.create({ eventId, notificationTime }); // สร้างการแจ้งเตือนใหม่
            res.status(201).json(newNotification); // ส่งข้อมูลการแจ้งเตือนใหม่กลับไปยังผู้ใช้
        } catch (error) {
            console.error("Error creating notification:", error);
            res.status(500).json({ message: "Internal Server Error" }); // ส่งข้อความข้อผิดพลาด
        }
    });
};
