module.exports = function(app) {
/* Routes API*/

// multer Instance
    var multer = require('multer');
    // upload destination
    var upload = multer({ dest: 'uploads/'})
    app.post('/login', function(req, res) {
      // login
      res.send('Login Page')
    })
    app.get('/register', function(req, res) {
      res.send('Reigster Page')
    })
    app.get('/', function(req, res) {
        res.sendFile(__dirname + '/index.html')
    })

}
