import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import { configDB } from './config/configDB';

// set up an app

const app = express();

const PORT = process.env.PORT || 8080;

// connect to db
mongoose.connect(
  configDB.uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
  .then(() => {
    console.log('connected to database');
    app.listen(PORT, () => {
      console.log(`Listening to port ${PORT}.`);
    });
  })
  .catch(err => console.log(err))

  app.get('/test', (req, res) => {
    res.send('Backend test message!');
  });

  // for deploy
  app.use('/static', express.static(__dirname + '/build/static'));
  app.use('/static/css', express.static(__dirname + '/build/static/css'));
  app.use('/static/js', express.static(__dirname + '/build/static/js'));

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
  });
  // for deploy end
