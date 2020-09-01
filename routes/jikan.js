var router = require('express').Router();
const jikanCtrl = require('../controllers/jikan');

router.get('/users/:id', jikanCtrl.index);

module.exports = router;