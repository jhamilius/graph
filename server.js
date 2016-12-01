var port = 4444;
var express = require('express');
var app = express();
var utils = require('./utils');

app.use('/',  utils.basicAuth('ecosys', 'Systemic16') , express.static(__dirname));
app.listen(port, function () {
  console.log('static server listening on port ' + port + '!');
});

