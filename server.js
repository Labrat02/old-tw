var express = require('express');
var app = express();
var mongojs = require('mongojs');
var bodyParser = require('body-parser')
// use 'body-parser as exploits found in 'express.bodyParser()
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// Setup some Mock Data
var mockData = require('./config/mockdata.js');
mockData.init();

app.use(express.static(__dirname + "/public"));

var env = {
    db: mongojs('mongo-dev/triviaWorld', ['questions', 'users']),
    routesPath: './app/routes/'
}
require('./app/routes')(app, env);

app.listen(3000);
console.log('Trivia World Running (port:' + 3000 + ')');

