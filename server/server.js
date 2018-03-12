const express = require('express');

var app = express();

app.use(express.json());

app.listen(4000);

console.log('Listening on port 4000');

/**
* Exports express
* @public
*/
module.exports = app;