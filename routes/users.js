var router = require('express').Router();
const usersCtrl = require('../controllers/users');

router.get('/show', usersCtrl.show);


module.exports = router; 