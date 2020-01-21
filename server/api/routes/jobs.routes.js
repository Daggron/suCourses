const router = require('express').Router();
const jobController = require('../controllers/jobs.controller');
router.get('/', jobController.jobs)

module.exports = router;