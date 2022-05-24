const express = require('express');
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

module.exports.handle = (req, res) => {
    res.send(req.query);
}