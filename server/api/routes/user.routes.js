const router = require('express').Router();
const userController = require('../controllers/user.controller');
const {isAuth} = require('../controllers/authentication/isauth');

router.post('/register',userController.register);

router.post('/loginrequest',userController.login);

router.post('/logout',userController.logout);

router.post('/blog' , isAuth  , userController.postBlog);

router.get('/blog' , userController.getblog);

router.get('/blogbyid/:id' , userController.getBlogById);


module.exports = router;