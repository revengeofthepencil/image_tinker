const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 5000;
const fs = require('fs');

// Enable CORS first
app.use(cors());

// Serve static files from React
app.use(express.static(path.join(__dirname, '../client/dist')));

// API route
app.get('/api/tester', (req, res) => {
  res.json({ message: 'Ahoy there, chump face!' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));