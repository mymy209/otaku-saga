var router = require('express').Router();
const animesCtrl = require('../controllers/animes');

router.get('/index', animesCtrl.index);

router.get('/', animesCtrl.search);

router.get('/new', animesCtrl.new);

router.post('/', animesCtrl.create);

router.get('/:id/edit', animesCtrl.edit);
router.put('/:id', animesCtrl.update);

router.get('/:id', animesCtrl.show);

router.delete('/:id', animesCtrl.delete);

module.exports = router; 