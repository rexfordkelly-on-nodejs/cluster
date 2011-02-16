
/**
 * Module dependencies.
 */

var cluster = require('../')
  , express = require('express')
  , http = require('http');

// setup:
//   $ npm install express

var app = express.createServer();

app.get('/', function(req, res){
  res.send('Hello World');
});

cluster(app)
  .use(cluster.debug())
  .listen(3000);