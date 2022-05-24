
const UserController = require('../controllers/UserController/controller');
module.exports.execute = (request, response)=>{
    UserController.get(request.query.username, response);
}