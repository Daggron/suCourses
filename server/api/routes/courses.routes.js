const router = require('express').Router();
const courseController = require('../controllers/courses.controller');
router.get('/',courseController.all);
router.post('/data',courseController.post);
router.get('/search/:search',courseController.search);
module.exports = router;