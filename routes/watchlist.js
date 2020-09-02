var router = require('express').Router();
const watchlistCtrl = require('../controllers/watchlist');

router.get('/', watchlistCtrl.watchList);

router.post('/', isLoggedIn, watchlistCtrl.addWatch);

router.delete('/:id', isLoggedIn, watchlistCtrl.delWatch);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router; 