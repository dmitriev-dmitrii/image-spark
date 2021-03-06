const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + '/dist/'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/dist/', 'index.html'));
});
console.log(port);
app.listen(port);
