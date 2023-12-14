const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body=parser');
 

const app = express();

const port = process.env.PORT || 8000;

 

app.use(cors());

app.use(bodyParser.json());

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

// Define your routes and controllers here

 

app.listen(port, () => {

  console.log(`Server is running on port: ${port}`);

});