var router = require('express').Router();
const usersCtrl = require('../controllers/users');

router.get('/show', usersCtrl.show);

router.get('/watchList', usersCtrl.watchList);

router.post('/watchList', isLoggedIn, usersCtrl.addWatch);

router.delete('/watchList/:id', isLoggedIn, usersCtrl.delWatch);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router; 