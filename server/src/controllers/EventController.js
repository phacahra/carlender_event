const db = require('../config/dbConfig'); // Assuming you have a dbConfig file
const { Event } = require('../models');

exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.findAll(); // ดึงข้อมูลเหตุการณ์ทั้งหมด
        res.status(200).json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ message: 'Error fetching events', error });
    }
};

exports.createEvent = async (req, res) => {
    const { title, startTime, endTime } = req.body;
    try {
        const newEvent = await Event.create({ title, startTime, endTime });
        res.status(201).json(newEvent);
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ message: 'Error creating event', error });
    }
};

// Get all events
exports.getEvents = async (req, res) => {
    try {
        const events = await Event.findAll(); // Assuming you're using Sequelize
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving events", error });
    }
};

// Get event by ID
exports.getEventById = async (req, res) => {
    const { id } = req.params;
    try {
        const event = await Event.findByPk(id);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving event", error });
    }
};

// Create a new event
exports.createEvent = async (req, res) => {
    const newEvent = req.body;
    try {
        const event = await Event.create(newEvent);
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ message: "Error creating event", error });
    }
};

// Update an event
exports.updateEvent = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const [updated] = await Event.update(updates, { where: { id } });
        if (!updated) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.status(200).json({ message: "Event updated" });
    } catch (error) {
        res.status(500).json({ message: "Error updating event", error });
    }
};

// Delete an event
exports.deleteEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Event.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.status(204).json(); // No content to return
    } catch (error) {
        res.status(500).json({ message: "Error deleting event", error });
    }
};
