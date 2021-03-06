//imports
const router = require('express').Router();
const passport = require('passport');

/*LOGIN ROUTES & AUTHENTICATION**********************************************************************************************************/

// auth login
router.get('/login', (req, res) => {
    res.render('login', {user: req.user}) //allows us to send req.user to login.ejs so that we can retrieve information from the current session
})

//authorize with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile'] //look here for info on what to return to a logged in user (refer to netninja passport tutorial nr 8)
}));

//callback route for google to redirect to after successful login
router.get('/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/profile'); //keep in mind this redirect
})

// auth logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/auth/login'); //redirects to login page when logged out
    console.log('user logged out.');
});

module.exports = router;