const Strategy = require('passport-local').Strategy;
const User = require('../../models/user.model');
const bcrypt = require('bcryptjs');

module.exports = async (passport)=>{
    passport.use(new Strategy({usernameField : 'email'},async (username , password , done)=>{
       let user = await User.findOne({email : username});

       if(!user){
           return(done(null , false , "User Doesn't exist"));
       }else{
            let match = await bcrypt.compare(password , user.password);
            if(!match){
                return(done(null , false , 'Email and password do not match'));
            }else{
                console.log('authenticated')
                return(done(null , user));
            }
       }
    }))

    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
    });
}