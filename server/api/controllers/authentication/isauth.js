exports.isauth = async (req,res,next)=>{
    console.log(req.isAuthenticated());
    if(req.isAuthenticated()){
        req.session.user = req.user;
        req.session.userid = req.user._id;
        return next();
    }else{
        return res.redirect('/login')
    }
}