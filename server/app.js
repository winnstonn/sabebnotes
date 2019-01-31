const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const authLogin = require('./routes/auth_login');
const mongodbClient = require('mongodb').MongoClient;
const config = require('./serverConfig');
const insertNote = require('./router/addingNote');

app.use(bodyParser.json());

app.listen(port, () => {
    console.log('We are live on ' + port);
});

const user = new mongodbClient(config.DB_URL, {
    useNewUrlParser: true
});

user.connect(function (err, user) {
    console.log("You have connected to DB");

    const db = user.db(config.DB_NAME);

    app.post('/api/auth_login', function(req, res) {
        res.send(authLogin(req, res, db));
    })
    .get('/', function(req, res) {
        res.send('welcome boi to ma API');
    });
});




