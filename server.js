'use strict';

const express = require('express');
const app = express();

const festival = require('./festival');
const port = process.env.PORT || 3000;

app.use('/', festival);

app.listen(port, () => {
  console.log('Listening on Port:' + port);
});
