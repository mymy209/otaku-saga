const mongoose = require('mongoose');
const User = require('../models/user');
const Anime = require('../models/anime');

module.exports = {
    index, 
    create, 
    delete: delWatch
}

function create(req, res, next) {
  //console.log('HELLO', req.body.id);
    req.user.watchlist.push(req.body.id);
    req.user.save(function(err) {
      console.log("ADDED WATCHLIST", req.user.watchlist);
      console.log("USER", req.user);
      res.redirect('/watchlist');
    });
  }
  
  function delWatch(req, res, next) {
    req.user.watchlist.splice(req.params.id, 1);
    req.user.save(function(err) {
      res.redirect('/watchlist');
    });
  }

function index(req, res) {
  console.log(req.user.watchlist);
  User.findById(req.user._id).populate('watchlist').exec(function(err, user) {
    //console.log(user);
    //console.log(user.watchlist);
    res.render('watchlist/index', {user});
  });
}

