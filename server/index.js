const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/../client'));

app.get('/product', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
})

module.exports = app;
