const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = {
    index, 
    show,
    watchList, 
    addWatch, 
    delWatch
}

function addWatch(req, res, next) {
    // This is very important to remember
    // req.user IS the Mongoose doc for the logged in user/student
    req.user.facts.push(req.body);
    req.user.save(function(err) {
      res.redirect('/users/show');
    });
  }
  
  function delWatch(req, res, next) {
    req.user.facts.splice(req.params.id, 1);
    req.user.save(function(err) {
      res.redirect('/users/show');
    });
  }

function watchList(req, res) {
    res.render('users/watchList');
}

function show(req, res) {
    res.render('users/show');
};

function index(req, res) {
    res.render('index');
}