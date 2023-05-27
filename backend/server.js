const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/dbconnection.js');

dotenv.config();

const app = express();

db.connectionDB();

app.listen(process.env.SERVER_PORT, () => {
  console.log('SERVER RUNNING ON PORT ==> ', process.env.SERVER_PORT);
});
