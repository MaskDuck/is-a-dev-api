
const UserController = require('../../controllers/UserController/controller');
module.exports.execute = (request, response)=>{
    UserController.create(request.query, response);
}