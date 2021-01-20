const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const User = require('../models/user');

passport.use(
    new LocalStrategy({ usernameField: 'email' },(email, password, done) => {
        User.findOne({email: email}).then((user) =>{
            if(!user){
                return done(null, false,{message: 'Email not registered'})
            }
            if(user.password!=password){
                return done(null,false,{message: 'Wrong Password'})
            }
            done(null,user)

        }).catch((err)=>{
            done(err)
        })
    })
)

passport.serializeUser((user,done)=>{
    // console.log(user);
    done(null,user._id)
})


passport.deserializeUser((_id, done) => {
    User.findById(_id).then((user) => {
        done(null, user);
    }).catch((err) => {
        console.log(err);
    })
      
  });
module.exports=passport