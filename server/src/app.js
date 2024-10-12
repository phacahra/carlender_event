const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index'); // Make sure this points to your routes file
const cors = require('cors');

app.use(cors()); // Enable CORS for all requests
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Use routes
app.use('/api', routes); // Use API prefix

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
