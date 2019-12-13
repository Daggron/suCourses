const router = require('express').Router();
const categoryController = require('../controllers/category.controller');

router.get('/',categoryController.all);
router.post('/add',categoryController.post);

module.exports = router;