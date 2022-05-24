const mongoose = require('mongoose');

const UserModel = mongoose.model('User', new mongoose.Schema({
    username: String,
    password: String,
    domains: Object
}));

module.exports = UserModel;