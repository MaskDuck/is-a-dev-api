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
const bodyParser = require('body-parser');
router.use(bodyParser.json());

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

router.post('/users/authentication/api/register', async(req, res) => {
    userRoutes.registerUser.execute(req, res);
})

router.get('/users/authentication/register', async(req, res) => {
    userRoutes.register.execute(req, res);
})

module.exports = router;