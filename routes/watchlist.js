var router = require('express').Router();
const watchlistCtrl = require('../controllers/watchlist');

router.get('/', watchlistCtrl.index);

module.exports = router; 