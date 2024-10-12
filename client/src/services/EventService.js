import axios from 'axios';

const API_URL = 'http://localhost:3001/api/events'; // Update this URL based on your server setup

export const EventService = {
    async fetchEvents() {
        try {
          const response = await EventService.getAllEvents();
          console.log('Events fetched successfully:', response.data);
          this.events = response.data;
        } catch (error) {
          console.error('Error fetching events:', error);
          this.errorMessage = 'Failed to fetch events. Please try again.';
        }
      },
      
    // Fetch all events
    getAllEvents() {
        return axios.get(API_URL); // No need to append '/events' since API_URL already includes it
    },
    
    // Fetch a single event by ID
    getEventById(id) {
        return axios.get(`${API_URL}/${id}`);
    },
    
    // Create a new event
    createEvent(eventData) {
        return axios.post(API_URL, eventData); // Ensure your server handles this POST request
      },
    
    // Update an existing event by ID
    updateEvent(id, eventData) {
        return axios.put(`${API_URL}/${id}`, eventData);
    },
    
    // Delete an event by ID
    deleteEvent(id) {
        return axios.delete(`${API_URL}/${id}`);
    },
};
