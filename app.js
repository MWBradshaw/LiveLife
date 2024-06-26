const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const connection = mysql.createConnection({
  host : process.env.HOST,
  user : process.env.USER,
  password :process.env.PASSWORD,
  database :process.env.DATABASE,
})

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 
