<template>
  <div>
    <h2>Event List</h2>
    <ul>
      <li v-for="event in events" :key="event.id">
        <router-link :to="{ name: 'ShowEvent', params: { eventId: event.id } }">
          <strong>{{ event.title }}</strong> - {{ event.startTime }} to {{ event.endTime }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EventList',
  data() {
    return {
      events: [
        { id: 'event1', title: 'Meeting', startTime: '2024-10-20 10:00', endTime: '2024-10-20 11:00' },
        { id: 'event2', title: 'Conference', startTime: '2024-10-21 12:00', endTime: '2024-10-21 13:00' },
      ],
    };
  },
};
</script>

<style scoped>
/* Add component specific styles here */
ul {
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
}

li {
  margin: 10px 0; /* Space between items */
}

a {
  text-decoration: none; /* Remove underline */
  color: #007bff; /* Link color */
  transition: color 0.3s; /* Smooth color transition */
}

a:hover {
  color: #0056b3; /* Darker color on hover */
}
</style>
