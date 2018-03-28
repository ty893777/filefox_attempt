/*    _____ app.js _______ */

// ___ Tools ___
var express = require('express');
var app = express();
var passport = require('passport');
var mongoose = require('mongoose'); // mongodb, schemas
var flash = require('flash');


var morgan = require('morgan');
var bodyParser = require('body-parser');
var sesson = require('session');

var _ = require('lodash');
var _ = require('lodash/core');
var fp = require('lodash/fp');
var array = require('lodash/array');
var object = require('lodash/fp/object');
const chalk = require('chalk');

require('./routes')(app);

// ___________ Configuration __________

app.use(passport.initialize())
app.use(passport.session())

var type = upload.array('photos', 12);
app.post('/upload', type, function (req, res) {
    //Log each file name inside the console.
    console.log('Uploaded multiple files'+ _.map(req.files,'originalname').join(', '))
    res.send('Uploades files successfully:'+ _.map(req.files,'originalname').join(', '))
  })

app.listen(8080, function() {
  console.log(chalk.red('File uploader running on port') + chalk.blue('8080'));
})
