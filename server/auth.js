import passport from 'passport'
const User = require('./models/').User
const localStrategy = require('passport-local').Strategy
passport.use('local', new localStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  function(username, password, done) {
    let findUser = User.findOne({
      where: {
        email: username,
        password: password
      }
    })

    findUser.then((user) => {
      if (user) {
        return user
      } else {
        throw new Error("invalid username or password")
      }
    })
    .then((user) => {
      return done(null, user.toJSON())
    })
    .catch((err) => {
      return done(null, false, { message: err })
    })
  }
))
passport.serializeUser(function(user, done) {
  done(null, user.id)
})
passport.deserializeUser(function(id, done) {
  User.findById(id)
  .then((user, err) => {
    return done(err, user)
  })
})