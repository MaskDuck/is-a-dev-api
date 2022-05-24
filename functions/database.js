const mongoose = require('mongoose');
module.exports.connect = async(uri) => {
    mongoose.connect(uri);
}