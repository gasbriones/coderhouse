const path = require('path');
const consolidate = require('consolidate');
const express = require('express');
const mock = require('./data/mock.json');
const app = express();

app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'templates'));

//middlewares
app.use('/static', express.static('static'));

//default route
app.get('/', (req, res) => res.render('index', { title : 'Shopping Cart' }));

//your routes
app.get('/items', (req, res) => res.json(mock));

const listener = app.listen(1337, () =>
  console.log(`Running app on ${listener.address().address}${listener.address().port}`));
