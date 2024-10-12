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
  
  export default {
    name: 'CalendarIndex',
    components: { VueCal },
    data() {
      return {
        events: [
        { id: 'event1', 
        title: 'Meeting', 
        start: '2024-10-20 10:00', 
        end: '2024-10-20 11:00' },
        { id: 'event2',
          start: '2024-10-21T12:00:00',
          end: '2024-10-21T13:00:00',
          title: 'Conference',
         },
        ],
      };
    },
    methods: {
      viewEvent(event) {
        this.$router.push({ name: 'ShowEvent', params: { eventId: event.id } });
      },
    },
  };
  </script>
  
  <style scoped>
  .custom-vuecal {
    height: 600px; /* Adjust as necessary */
  }
  </style>
  