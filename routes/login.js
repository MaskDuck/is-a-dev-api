
const LoginController = require('../controllers/LoginController/controller');
module.exports.execute = (request, response)=>{
    LoginController.handle(request, response);
}