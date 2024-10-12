<template>
    <div>
      <h2>Event Details</h2>
      <div v-if="event">
        <h3>{{ event.title }}</h3>
        <p><strong>Description:</strong> {{ event.description }}</p>
        <p><strong>Start Time:</strong> {{ event.startTime }}</p>
        <p><strong>End Time:</strong> {{ event.endTime }}</p>
      </div>
      <p v-else>Loading event details...</p>
    </div>
  </template>
  
  <script>
  import { EventService } from '@/services/EventService';
  
  export default {
    name: 'ShowEvent',
    data() {
      return {
        event: null,
      };
    },
    async created() {
      await this.fetchEvent();
    },
    methods: {
      async fetchEvent() {
        const eventId = this.$route.params.eventId;
        try {
          const response = await EventService.getEventById(eventId);
          this.event = response.data;
        } catch (error) {
          console.error('Error fetching event details:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  