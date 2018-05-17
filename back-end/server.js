var bodyParser = require('body-parser');
var express = require('express');
var cors = require('cors');
var app = express();
var config = require('../configs');

const port = config.backend.port;

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//app.use(require('./teste')(express))
app.use(require('./api/insta/login')(express))
app.use(require('./api/core/getDataByUser')(express))

app.listen(port)

console.log('Starting InstaScrutinizer server' )
console.log('INFO : Server started and is listening on http://localhost:'+port+'/' )


