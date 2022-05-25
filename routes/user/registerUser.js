const express = require('express');
/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */
const bcrypt = require('bcrypt');
const UserModel = require('../../models/user');
module.exports.execute = async(request, response) => {
    const { email, password } = request.body
    const hash = await bcrypt.hash(password, 10);

    try {
        const usr = await UserModel.create({
            email,
            password: hash
        })
        console.log('User Created!', usr);
    } catch(err) {
        console.log(err)
        return response.json({status: err});
    }
}