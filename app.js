/*    _____ app.js _______ */

// ___ Tools ___
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var passport = require('passport');
var mongoose = require('mongoose'); // mongodb, schemas
var flash = require('flash');

var multer = require('multer');
var upload = multer({ dest: 'uploads/'})

var _ = require('lodash'); // Lodash
var _ = require('lodash/core');
var fp = require('lodash/fp');
var array = require('lodash/array');
var object = require('lodash/fp/object');
const chalk = require('chalk');

var morgan = require('morgan'); // log all request to the console.
var bodyParser = require('body-parser');
var session = require('express-session'); // get information from html forms.

var configDB = require('./config/database.js');
// ___________ Configuration __________

//require('./config/passport')(passport)

// set up our express app
app.use(morgan('dev'));
app.use(bodyParser());

// required for passport
app.use(session({ secret: 'ilovewaterilovewaterilovewater'  })) // session secret
app.use(passport.initialize())
app.use(passport.session()) // persistent login session.
app.use(flash()); // persistent flash messages stored in sessions

// required for MongoDB
const options = {
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE, // never stop.
  reconnectInterval: 500 // every half second

}
mongoose.connect(configDB.url, options, function(error) {
  if(error) {
    console.log(chalk.green('MongoDB successfully connected.'))
  }
});
// routes =============================

require('./routes.js')(app, passport, multer, upload);

// launch =============================

app.listen(8080, function() {
  console.log(chalk.red('File uploader running on port') + chalk.blue('8080'));
})
