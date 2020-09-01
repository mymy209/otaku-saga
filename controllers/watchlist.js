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
    req.user.watchlist.push(req.body);
    req.user.save(function(err) {
      res.redirect('/watchlist');
    });
  }
  
  function delWatch(req, res, next) {
    req.user.watchlist.splice(req.params.id, 1);
    req.user.save(function(err) {
      res.redirect('/watchlist');
    });
  }

function watchList(req, res) {
    res.render('watchlist/index');
}

function show(req, res) {
    res.render('watchlist/show');
};

function index(req, res) {
    res.render('index');
}