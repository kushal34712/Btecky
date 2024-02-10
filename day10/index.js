const express = require('express');
const path = require('path');
const app = express();

// Define the directory for serving static files
const publicDirectoryPath = path.join(__dirname, 'public');

// Serve static files from the "public" directory
app.use(express.static(publicDirectoryPath));

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
