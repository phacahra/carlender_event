<template>
  <div>
    <h2>Create New Event</h2>
    <form @submit.prevent="createEvent">
      <!-- <input v-model="newEvent.id" placeholder="ID" required /> -->
      <input v-model="newEvent.title" placeholder="Event Title" required />
      <input v-model="newEvent.startTime" type="datetime-local" required />
      <input v-model="newEvent.endTime" type="datetime-local" required />
      <!-- <input v-model="newEvent.userId" placeholder="User ID" required /> -->
      <button type="submit">Create Event</button>
    </form>
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
  </div>
</template>

<script>
import Api from '@/services/Api';

export default {
  name: 'CreateEvent',
  data() {
    return {
      newEvent: {
        id: '',
        title: '',
        startTime: '',
        endTime: '',
        userId: '',
      },
      errorMessage: '',
    };
  },
  methods: {
    async createEvent() {
      // ตรวจสอบค่าที่จะถูกแทรก
      const eventToCreate = {
        id: this.newEvent.id,
        title: this.newEvent.title,
        startTime: new Date(this.newEvent.startTime), // แปลงให้เป็น Date
        endTime: new Date(this.newEvent.endTime), // แปลงให้เป็น Date
      };

      console.log(eventToCreate); // แสดงค่าของ event ที่จะถูกแทรก

      try {
        
        await Api.createEvent(eventToCreate);
        alert('Event created successfully!');
        this.resetForm();
      } catch (error) {
        console.error('Error creating event:', error);
        this.errorMessage = 'Event created successfully!';
      }
    },
    resetForm() {
      this.newEvent = { id: '', title: '', startTime: '', endTime: '',userId: '', };
      this.errorMessage = '';
    },
  },
};
</script>

<style scoped>
/* Add component specific styles here */
</style>
