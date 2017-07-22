const User = require('../models/User');

const logInUser = (req, res, next) => User.getUser(req.body, res);
const signUpUser = (req, res, next) => User.createUser(req.body, res);

module.exports = { logInUser, signUpUser };
