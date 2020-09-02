var router = require('express').Router();
const watchlistCtrl = require('../controllers/watchlist');

router.get('/', watchlistCtrl.index);

router.post('/', isLoggedIn, watchlistCtrl.create);

router.delete('/:id', isLoggedIn, watchlistCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router; 