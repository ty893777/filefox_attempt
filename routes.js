module.exports = function(app, passport, multer, upload) {
/* Routes API

*/
    // =================
    // HOME =======
    // =================
    app.get('/', function(req, res) {
        res.sendFile(__dirname + '/index.html')
    })

    // =================
    // LOGIN =======
    // =================
    // show login form
    app.post('/login', function(req, res) {
      res.send('Login Page')
    })
    // process the login form
    // app.post('login' passport stuff);

    // =================
    // REGISTER =======
    // =================
    // show register form
    app.get('/register', function(req, res) {
      res.send('Reigster Page')
    })
    app.post('/upload', upload.array('photos', 12), function (req, res) {
        //Log each file name inside the console.
        console.log('Uploaded multiple files'+ _.map(req.files,'originalname').join(', '))
        res.send('Uploades files successfully:'+ _.map(req.files,'originalname').join(', '))
      })

}
