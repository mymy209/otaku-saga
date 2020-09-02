var router = require('express').Router();
const animesCtrl = require('../controllers/animes');

router.get('/index', animesCtrl.index);

router.post('/', animesCtrl.create);

router.delete('/:id', animesCtrl.delete);

module.exports = router; 