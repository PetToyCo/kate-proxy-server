const express = require('express');
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const photoGallery = 'http://localhost:3003';

const app = express();
const PORT = 3004;

app.all("/itemImages/*", function(req, res) {
    console.log('redirecting to Photo Gallery');
    apiProxy.web(req, res, {target: photoGallery});
});


app.use(express.static(__dirname + '/../client'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
