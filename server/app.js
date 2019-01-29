const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const authLogin = require('./routes/auth_login');
const InsertNote = require('./routes/noteInsert');

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

app.post('/api/note', function(req, res) {
    InsertNote(req, res);
})






