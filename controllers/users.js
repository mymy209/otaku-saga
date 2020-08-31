const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = {
    index,
    show,
}



function index(req, res) {
    res.render('index');
}

function show(req, res) {
    res.render('users/show');
};