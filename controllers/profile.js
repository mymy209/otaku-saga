const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = {
    show
}

function show(req, res) {
    res.render('profile/show');
};