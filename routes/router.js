const userRoutes = require('./user/routes');
const informationRoutes = require('./information/routes');
const loginRoutes = require('./login/routes');
const { Router } = require('express');
const router = Router();
const routes = {
    userControlRoutes: userRoutes,
    information: informationRoutes,
    loginController: loginRoutes
};

router.get('/', async(req, res) => {
    res.json(routes);
});

router.get('/check/:domain', async(req, res) => {
    informationRoutes.check.execute(req, res);
});

router.post('/login', async(req, res) => {
   loginRoutes.login.execute(req, res);
});

router.get('/getUser', async(req, res) => {
    userRoutes.getUser.execute(req, res);
});

router.post('/createUser', async(req, res) => {
    userRoutes.createUser.execute(req, res);
});

module.exports = router;