<template>
  <div>
    <h2>Notification List</h2>
    <ul>
      <li v-for="notification in notifications" :key="notification.id">
        <strong>{{ notification.title }}</strong> - {{ notification.message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NotificationList',
  data() {
    return {
      notifications: [
        { id: 1, title: 'Meeting Reminder', message: 'You have a meeting scheduled for today at 3 PM.' },
        { id: 2, title: 'Project Deadline', message: 'The deadline for the project is approaching on October 25.' },
        { id: 3, title: 'New Comment', message: 'You have received a new comment on your post.' },
      ],
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
ul {
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
}

li {
  margin: 10px 0; /* Space between items */
}
</style>
