const express = require('express');
const cors = require('cors');
app.use(cors());
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const authLogin = require('./routes/auth_login');
// Set up a whitelist and check against it:
var whitelist = ['http://example1.com', 'http://example2.com'] // Diisi sama url yang mau kita akses aja
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// Then pass them to cors:
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.post('/api/auth_login', function(req, res) {
    authLogin(req, res);
})
.get('/', function(req, res) {
    res.send('welcome boi to ma API');
});

app.listen(port, () => {
    console.log('We are live on ' + port);
});






