const router = require('express').Router();
const courseController = require('../controllers/courses.controller');

router.get('/',courseController.all);
router.post('/data',courseController.post);
router.get('/search/:search',courseController.search);
router.get('/id/:id',courseController.id);
router.get('/category/:category',courseController.categoryWise);

module.exports = router;