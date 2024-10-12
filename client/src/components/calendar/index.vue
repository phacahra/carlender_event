<template>
  <div>
    <h1>Calendar</h1>
    <vue-cal
      :events="events"
      @event-click="viewEvent"
      :time="false"
      :hide-view-selector="true"
      class="custom-vuecal"
    ></vue-cal>
  </div>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import Api from '@/services/Api'; // Ensure this API service is properly set up

export default {
  name: 'CalendarIndex',
  components: {
    VueCal,
  },
  data() {
    return {
      events: [],
    };
  },
  async created() {
    await this.fetchEvents();
  },
  methods: {
    async fetchEvents() {
      try {
        const response = await Api.getEvents(); // Ensure your API service returns events
        this.events = response.data.map(event => ({
          start: event.startTime,
          end: event.endTime,
          title: event.title,
          id: event.id,
        }));
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    },
    viewEvent(event) {
      this.$router.push({ name: 'ShowEvent', params: { eventId: event.id } }); // Modify this if necessary
    }
  }
};
</script>

<style scoped>
.custom-vuecal {
  height: 600px; /* Set a fixed height for the calendar */
  border: 1px solid #ccc; /* Add border for visibility */
}
</style>
