const express = require('express');
const { join } = require('path');
const app = express();
const router = require('./controllers')

app.set('port', process.env.PORT || 1234)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "..", 'public')));

app.use(router);

module.exports = app;