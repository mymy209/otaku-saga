var router = require('express').Router();
const profileCtrl = require('../controllers/profile');

router.get('/show', profileCtrl.show);

module.exports = router; 