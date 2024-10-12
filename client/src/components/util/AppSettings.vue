<template>
  <div class="settings-container">
    <h2>Application Settings</h2>
    <p>Manage user settings and application preferences here.</p>
    
    <form @submit.prevent="saveSettings">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" v-model="settings.username" id="username" required />
      </div>
      
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="settings.email" id="email" required />
      </div>
      
      <div class="form-group">
        <label for="theme">Theme:</label>
        <select v-model="settings.theme" id="theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="notifications">Notifications:</label>
        <input type="checkbox" v-model="settings.notifications" id="notifications" />
        <label for="notifications">Enable notifications</label>
      </div>
      
      <button type="submit">Save Settings</button>
    </form>

    <p v-if="message" class="success-message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'AppSettings',
  data() {
    return {
      settings: {
        username: '',
        email: '',
        theme: 'light',
        notifications: false,
      },
      message: '',
    };
  },
  methods: {
    saveSettings() {
      // Here you can handle saving settings logic, e.g., API call to save settings
      console.log('Settings saved:', this.settings);
      this.message = 'Settings saved successfully!';
      // Reset form or handle additional logic as necessary
    },
  },
};
</script>

<style scoped>
.settings-container {
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #007bff;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.success-message {
  color: green;
  margin-top: 10px;
}
</style>
