var express = require('express')
var app = express();

app.use(express.static('public'));
app.set('views', './views')
app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.send('Hello Trello!');
});

app.get('/jade', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.listen(3000, function () {
    console.log('listening on prot 3000!')
});