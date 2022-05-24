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
            response.json(data);
        }
    })
};

module.exports.create = (data, response) => {
    if(!data) {
        response.json({
            err: 'No Data Provided'
        })
    } else if(!data.username) {
        response.json({
            err: 'No Username'
        });
    }

    if(data && data.username && data.password) {
       if(!data.domains) {
          UserModel.create({
                username: data.username,
                password: data.password,
                domains: {}
           });

           response.json({
               status: 'User Created!',
           });
       } else {
        UserModel.create({
            username: data.username,
            password: data.password,
            domains: data.domains
        });

        response.json({
            status: 'User Created!',
        });
       }
    }
}