const jwt = require('jsonwebtoken');

exports.isAuth = async (req,res,next)=>{
    const token = req.body.token;
    console.log(token);
    try{
    const verified = await jwt.verify(token,'Darth Vader');
    if(verified){
        next()
    }else{
        res.json({
            success : false,
            message : "Access Denied"
        })
    }
    }catch(err){
        res.json({
            success : false,
            message : "Invalid Token"

        })
    }
}