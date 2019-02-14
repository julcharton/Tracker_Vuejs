const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');

module.exports = (app) => {
  // Routes 
  app.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register);
};
