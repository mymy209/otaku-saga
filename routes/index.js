var express = require('express');
var router = express.Router();
const passport = require('passport');
const userCtrl = require('../controllers/users');

//home page
router.get('/', function(req, res) {
  res.redirect('/index');
});

router.get('/index', userCtrl.index);

//log in
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/index',
    failureRedirect: '/users',
  }
));

// Logging out
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/index');
});

module.exports = router;
