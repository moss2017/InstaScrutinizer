var bodyParser = require('body-parser')
var express = require('express')
var cors = require('cors')
var app = express()
var config = require('../configs')
app.use(cors());

const port = config.backend.port;

//body parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())// support json encoded bodies
//app.use(require('./teste')(express))
app.use(require('./api/insta/login')(express))

app.listen(port)

console.log('Starting InstaScrutinizer server' )
console.log('INFO : Server started and is listening on http://localhost:'+port+'/' )


