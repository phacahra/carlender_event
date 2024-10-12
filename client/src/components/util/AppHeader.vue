<template>
  <div>
    <nav class="nv-navbar">
      <div class="navbar-brand">Event Management</div>
      <ul class="nav">
        <li><router-link :to="{ name: 'calendar' }">Calendar</router-link></li>
        <li><router-link :to="{ name: 'events' }">Events</router-link></li>
        <li><router-link :to="{ name: 'CreateEvent' }">Create Event</router-link></li>
        <li><router-link :to="{ name: 'NotificationList' }">Notifications</router-link></li>
        <li><router-link :to="{ name: 'settings' }">Settings</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      // Add any data properties you need
    };
  },
  methods: {
    // You can add methods for dynamic behavior here
    handleLogout() {
      // Logic for logging out the user (if applicable)
      console.log("User logged out.");
      // Example: Redirect to the login page or perform any necessary cleanup
      this.$router.push({ name: 'login' });
    }
  }
};
</script>

<style scoped>
.nv-navbar {
  background: linear-gradient(90deg, #007bff, #00c4ff); /* Gradient background */
  border-bottom: 2px solid #0056b3; /* Darker border for depth */
  padding: 1rem 2rem; /* Increased padding */
  display: flex; /* Flexbox for alignment */
  justify-content: space-between; /* Space between brand and nav items */
  align-items: center; /* Center items vertically */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Enhanced shadow */
  transition: background 0.3s; /* Smooth background transition */
}

.nv-navbar:hover {
  background: linear-gradient(90deg, #0056b3, #00aaff); /* Change gradient on hover */
}

.navbar-brand {
  font-size: 24px; /* Larger brand font size */
  color: #ffffff; /* White text for brand */
  font-weight: bold; /* Bold text */
}

.nv-navbar .nav {
  list-style: none; /* Remove bullets */
  display: flex; /* Flex layout */
  margin: 0; /* Remove margin */
  padding: 0; /* Remove padding */
}

.nv-navbar .nav li {
  margin-right: 2rem; /* Spacing between items */
}

.nv-navbar .nav li:last-child {
  margin-right: 0; /* Remove margin for last item */
}

.nv-navbar .nav li a {
  text-decoration: none; /* Remove underline */
  color: #ffffff; /* White text color */
  font-weight: 500; /* Normal weight */
  position: relative; /* Position for underline effect */
  transition: color 0.3s, transform 0.2s, filter 0.3s; /* Transition for color and transform */
}

.nv-navbar .nav li a:hover {
  color: #ffe600; /* Yellow on hover */
  transform: translateY(-2px) rotate(-2deg); /* Lift effect with rotation */
  filter: brightness(1.1); /* Brightness effect on hover */
}

.nv-navbar .nav li a.router-link-active {
  color: #ffe600; /* Active link color */
  font-weight: bold; /* Make active link bold */
}

.nv-navbar .nav li a:after {
  content: ''; /* Pseudo-element for underline */
  position: absolute; /* Position relative to the link */
  width: 100%; /* Full width */
  height: 2px; /* Height of underline */
  background: #ffe600; /* Yellow underline */
  bottom: -5px; /* Position below the link */
  left: 0; /* Align left */
  transform: scaleX(0); /* Start scaled down */
  transition: transform 0.3s ease; /* Transition for scale */
}

.nv-navbar .nav li a:hover:after,
.nv-navbar .nav li a.router-link-active:after {
  transform: scaleX(1); /* Scale to full width on hover or when active */
}
</style>
