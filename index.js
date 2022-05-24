const { application } = require('express');
const express = require('express');
const app = express();
const config = require('./config.json');
const routes = {
    login: require('./routes/login'),
    check: require('./routes/check'),
    getUser: require('./routes/getUser'),
    createUser: require('./routes/createUser'),
}
const db = require('./functions/database');
db.connect(config.db);

app.get('/', async(req, res) => {
    res.send('Welcome to is-a.dev api!')
});

app.get('/check/:domain', async(req, res) => {
    routes.check.execute(req, res);
});

app.post('/login', async(req, res) => {
   routes.login.execute(req, res);
});

app.get('/getUser', async(req, res) => {
    routes.getUser.execute(req, res);
});

app.post('/createUser', async(req, res) => {
    routes.createUser.execute(req, res);
});

app.listen(config.port, () => {
    console.log('Online')
});