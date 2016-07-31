'use strict';
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var AV = require('leanengine');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine( '.html', require( 'ejs' ).__express );
app.set( 'view engine', 'html' );
app.use(express.static('public'));

require('./cloud');
app.use(AV.express());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', function(req, res) {
  res.render('index');
});

module.exports = app;
