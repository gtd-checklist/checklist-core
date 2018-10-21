/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import http from 'http';

import { user, activity, auth } from './routes';

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
