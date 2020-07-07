const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/../client'));

app.get('/product', (req, res) => {
  var itemId = req.query.itemID;
  var itemNum = Number.parseInt(itemId);

  if (itemNum <= 199 && itemNum >= 100) {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
  } else {
    res.status(404).send();
  }

})

module.exports = app;
