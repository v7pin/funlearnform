require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://funlearn.punjabjewelersandfabrics.com',
  credentials: true,
}));

app.use(bodyParser.json());

// Connect to MySQL database
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'qkacepwf_admin',
  password: process.env.DB_PASS || 'Qwert@#44332211',
  database: process.env.DB_NAME || 'qkacepwf_funlearnregistrations'
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
      return res.status(500).send('Failed to save registration');
    }
    res.status(200).send('Registration successful');
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
