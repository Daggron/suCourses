const router = require('express').Router();
const userController = require('../controllers/user.controller');
const {isauth} = require('../controllers/authentication/isauth');

router.post('/register',userController.register);

router.post('/login',userController.login);

router.post('/blog' ,isauth , userController.postBlog);

router.get('/blog' , userController.getblog);


module.exports = router;