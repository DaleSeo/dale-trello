var express = require('express');
var dotenv = require('dotenv');
var config = require('./config');

var app = express();

dotenv.load();

app.use(express.static('public'));
app.set('views', './views')
app.set('view engine', 'jade');

// Prettify HTML
app.locals.pretty = true;

config.parsers(app);
config.log(app);
config.db(app);

app.get('/lite', function (req, res) {
  res.render('lite', {});
});

app.get('/api', function (req, res) {
  res.send('Hello Trello!');
});

app.get('/jade', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.use('/api/stories', require('./app/stories'));
// app.use('/api/clients/:userId/stories', require('./app/stories'));
// app.use('/api/clients/:userId/users', require('./app/users'));

app.listen(3000, function () {
  console.log('listening on port 3000!');
  console.log('listening in in http://localhost:3000')
});