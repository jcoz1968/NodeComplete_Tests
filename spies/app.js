var db = require('./db.js');

module.exports.handleSignup = () => {
  db.saveUser({ email, password });
};
