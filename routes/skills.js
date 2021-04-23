var express = require('express');
var router = express.Router();

var skillsCntr = require('../controllers/skills');

router.get('/', skillsCntr.index);
router.post('/', skillsCntr.create);
router.get('/new', skillsCntr.new);
router.get('/:id', skillsCntr.show);
router.delete('/:id', skillsCntr.delete);
router.get('/:id/edit', skillsCntr.edit);
router.patch('/:id', skillsCntr.patch);

module.exports = router;
