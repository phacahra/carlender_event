const express = require('express');
const router = express.Router();
const EventController = require('../controllers/EventController');

// Define routes
router.get('/events', EventController.getEvents);
router.get('/events/:id', EventController.getEventById);
router.post('/events', EventController.createEvent);
router.put('/events/:id', EventController.updateEvent);
router.delete('/events/:id', EventController.deleteEvent);

module.exports = router;
