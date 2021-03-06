const express = require('express');
const passport = require('passport');

const cipher = require('../auth/cipherHelper');
const AuthService = require('./authService');

const router = express.Router();
const authService = new AuthService();
const auth = passport.authenticate('jwt', { session: false });

router.post('/login', (req, res) => {
  passport.authenticate('local', { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(401).send({
        error: err ? err.message : 'Login or password is wrong',
      });
    }
    req.login(user, { session: false }, (error) => {
      if (error) {
        res.send(error);
      }

      const response = cipher.generateResponseTokens(user);
      res.send(response);
    });
  })(req, res);
});

router.post('/sign-up', (req, res) => {
  authService
    .register(req.body)
    .then(user => {
        const response = cipher.generateResponseTokens(user);

      res.send(response);
    })
    .catch(err => res.status(400).send({ error: err.message }));
});

/*

router.post('/reset-pass', auth, (req, res) => {
  const { id } = req.user;
  const { password, confirmPassword, resetPasswordToken } = req.body;

  authService
    .resetPassword(password, confirmPassword, id, resetPasswordToken)
    .then(() => res.send({ message: 'ok' }))
    .catch(err => {
      res.status(400).send({ error: err.message });
    });
});

router.post('/request-pass', (req, res) => {
  const { email } = req.body;
  authService
    .requestPassword(email)
    .then(() => res.send({ message: `Email with reset password instructions was sent to email ${email}.` }))
    .catch((error) => {
      res.status(400).send({ data: { errors: error.message } });
    });
});

router.post('/sign-out', (req, res) => {
  res.send({ message: 'ok' });
});

router.post('/refresh-token', (req, res) => {
  const token = req.body;
  authService
    .refreshToken(token.payload)
    .then(responseToken => res.send({ token: responseToken }))
    .catch(err => res.status(400).send({ error: err.message }));
});

*/


module.exports = router;
