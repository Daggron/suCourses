const User = require('../models/user.model');
const bcryptjs = require('bcryptjs');
const passport = require('passport');
require('./authentication/auth')(passport);
const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);
const question = require('../models/query.model');

exports.register = async (req,res)=>{
    let email = await User.findOne({email : req.body.email});
    if(email){
        res.json({
            message : 'User Already Exists',
            success : false
        })
    }else{
        let user = new User();
        user.email = req.body.email;
        user.username = req.body.username;
        let salt = await bcryptjs.genSalt(10);
        let hash = await bcryptjs.hash(req.body.password , salt);
        user.password = hash;
        user.save()
        .then(()=>{
            res.json({
                user : user,
                success : true
            })
        })
        .catch(err=>{
            console.log(err);
            res.json({
                error : 'Error creating user account',
                success : false
            })
        })

    }
}

exports.login = async (req,res,next)=>{
    passport.authenticate('local',{
        successRedirect : '/jobs',
        failureRedirect : '/',
        
    })(req,res,next);
}

exports.getblog = async (req,res)=>{
    let rawBlogs = await getAsync('blogs');
    let blogs = await JSON.parse(rawBlogs);
    res.json({
        blog : blogs
    })
}

exports.postBlog = async (req,res)=>{
    let que = new question();
    que.userid = req.session.userid;
    que.user = {
                    username : req.session.user.username,
                    email : req.session.user.email,
                };
    que.question = req.body.question;
    que.save()
    .then(()=>{
        res.json({
            success : true,
            message : "Data Posted Successfully"
        })
    }).catch(err=>{
        console.log(err);
        res.json({
            success : false,
            message : "Internal Server Error , It will be fixed soon"
        })
    })
}