const passport = require('passport');
const User     = require('../models/user.js');
const Token    = require('../models/token.js');

// Authentications and signups
const performLogin = (req, res, next, user) => {
  req.login(user, (err) => {
    if (err) return next(err);
    return Token.create({ userId: user._id }).then(token => res.json({ token }))
  });
}

const authController = {
    login: (req, res) => res.json({ redirectTo: '/dashboard' }),
    logout: (req, res) => {
        req.logout();
        res.json({ redirectTo: '/' });
	  },
    processLogin: (req, res, next) => {
        // This is the post handler for login attempts
        var authFunction = passport.authenticate('local', (err, user, info) => {
          if (err) return next(err);

          if (!user) {
            console.log('Error logging in!', err);
            return res.json({ redirectTo: '/whoops' });
          }

          performLogin(req, res, next, user);
        });

        authFunction(req, res, next);
	},
    processSignup: (req, res, next) => {
        // This is the post handler for signups
        let user = new User({
          email: req.body.email,
          password: req.body.password
        });

        user.save((err, user) => {
          if (err) {
            let errorMessage = 'An error occured, please try again';

            if (err.code === 11000) {
              errorMessage = 'This user already exists.';
            }

            console.log('Error Signing Up:', errorMessage, err);
            return res.redirect('/auth/login');
          }

          // If we make it this far, we are ready to log the user in.
          performLogin(req, res, next, user);
        });
	}
}

module.exports = authController;
