/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');

const { user, activity, auth } = require('./src/routes');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/user', user);
app.use('/api/activity', activity);
app.use('/api/auth', auth);

mongoose.connect(process.env.MONGO_HOST, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const server = http.createServer(app);

const port = process.env.PORT || 3000;
 
server.listen(port, () => console.log(`Server started on port ${port}`));
