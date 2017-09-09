const path = require('path');
const consolidate = require('consolidate');
const express = require('express');
const mock = require('./data/mock.json');
const app = express();



//your routes
app.get('/items', (req, res) => res.json(mock));

const listener = app.listen(1337, () =>
  console.log(`Running app on ${listener.address().address}${listener.address().port}`));
