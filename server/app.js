const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const authLogin = require('./routes/auth_login');

app.use(bodyParser.json());

app.get('/api/auth_login', function(req, res) {
    authLogin(req, res);
})
.get('/', function(req, res) {
    res.send('welcome boi to ma API');
});

app.listen(port, () => {
    console.log('We are live on ' + port);
});






