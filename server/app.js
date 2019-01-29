const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const authLogin = require('./routes/auth_login');
// Set up a whitelist and check against it:

app.use(bodyParser.json());

app.post('/api/auth_login', function(req, res) {
    res.send(authLogin(req, res));
})
.get('/', function(req, res) {
    res.send('welcome boi to ma API');
});

app.listen(port, () => {
    console.log('We are live on ' + port);
});






