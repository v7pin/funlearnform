require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2'); // Use mysql2 instead of mysql

const app = express();
const port = process.env.PORT || 5000; // Default to port 5000 if PORT is not defined in .env

app.use(cors());
app.use(bodyParser.json());

// Connect to MySQL database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectTimeout: 20000,
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    process.exit(1); // Exit process if unable to connect
  } else {
    console.log('Connected to MySQL database');
  }
});

// Route to handle form submission
app.post('/register', (req, res) => {
  const { name, email, phone, interests } = req.body;
  const interestsStr = interests.join(', ');

  const query = 'INSERT INTO registrations (name, email, phone, interests) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, phone, interestsStr], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ error: 'Failed to save registration' }); // Send JSON response
    }
    res.status(200).json({ message: 'Registration successful' }); // Send JSON response
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
