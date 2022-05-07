const { application } = require('express');
const express = require('express');
const app = express();
const config = require('./config.json');
const fetch = require('node-fetch');

app.get('/', async(req, res) => {
    res.send('Welcome to is-a.dev api!')
});

app.get('/check/:domain', async(req, res) => {
    const domain = req.params.domain;

    fetch(`https://api.github.com/repos/is-a-dev/register/contents/domains/${domain}.json`, {
            method: 'GET',
            headers: {
                'User-Agent': 'mtgsquad'
            }
        }).then(async(response) => {
            if(response.status && response.status == 404) {
                res.json({
                    status: 'available',
                    name: domain + '.is-a.dev'
                });
            } else res.json({
                status: 'unavailable',
                name: domain + '.is-a.dev'
            })
        })
})

app.listen(config.port, () => {
    console.log('Online')
})