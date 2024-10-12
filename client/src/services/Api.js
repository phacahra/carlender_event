import axios from 'axios';

const API_URL = 'http://localhost:3001/api'; // Replace with your server URL

const Api = {
  getEvents() {
    return axios.get(`${API_URL}/events`); // Use template literals correctly
  },
  getEventById(eventId) {
    return axios.get(`${API_URL}/events/${eventId}`); // Use template literals correctly
  },
  createEvent(eventData) {
    return axios.post(API_URL + '/events', eventData); // Create new event
  },
};

export default Api;
