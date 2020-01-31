const User = require('../models/user.model');
const bcryptjs = require('bcryptjs');
const passport = require('passport');
require('./authentication/auth')(passport);
const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);
const question = require('../models/query.model');
const jwt = require('jsonwebtoken');

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
                user : {name : user.username, email : user.email},
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

exports.login = async (req,res)=>{
    console.log(req.body);    
    let user = await User.findOne({email : req.body.email});
    if(user){
    let match = await bcryptjs.compare(req.body.password , user.password);

    if(match){
        req.session.id = user.id;
        req.session.user = user;
        const token = await jwt.sign({user : {name : user.username , email : user.email}} , 'Darth Vader',{algorithm : 'HS256'})
        res.json({
            user : {email : user.email , name : user.username},
            token : token,
            success : true
        })
    }else{
        res.json({
            success : false,
            message : "Email or password id Incorrect"
        })
    }
    }else{
        return res.json({
            success : false,
            message : "User Doesnot Exist"
        })
    }
}

exports.getblog = async (req,res)=>{
    let rawBlogs = await getAsync('blog');
    let blogs = await JSON.parse(rawBlogs);
    res.json({
        blog : blogs
    })
    
}

exports.postBlog = async (req,res)=>{
  
    if(req.session.user === undefined){
        res.json({
            message : "Access Denied Login In First",
            success : false
        })
    }else{
        let que = new question();
        que.userid = req.session.userid;
        que.title = req.body.title;
        que.user = {
                        username : req.session.user.username || "Anonymus",
                        email : req.session.user.email || "",
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
}

exports.logout = async (req,res)=>{
    req.session.user = null;
    res.json({
        success : true,
        message : "Log Out Successful"
    })
}

exports.getBlogById = async(req,res)=>{
    console.log(req.params.id);
    const rawblog = await getAsync(req.params.id);
    const blog = await JSON.parse(rawblog);
    res.json({
        blog : blog
    })

}