import express from 'express';
import test from './test/index';

const app = express();

const PORT  =process.env.PORT || 8080;

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

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}. Test: ${test}`);
});
