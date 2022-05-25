const { application } = require('express');
const express = require('express');
const app = express();
const config = require('./config.json');
const routes = require('./routes/user/routes');
const router = require('./routes/router');
const db = require('./functions/database');
db.connect(config.db);
app.use('/', router);

app.listen(config.port, () => {
    console.log('Online')
});