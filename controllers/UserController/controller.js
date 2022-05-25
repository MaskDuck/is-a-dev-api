const express = require('express');
/**
 *  
 * @param {express.Response} response
 */
const UserModel = require('../../models/user');
module.exports.get = (user, response) => {
    UserModel.find({username: user}, function(err, data) {
        if(err) {
            response.json({
                err,
                status: 'ERROR'
            });
        } else if(data) {
            response.json({
                username: data[0].username,
                domains: data[0].domains
            });
        }
    })
};