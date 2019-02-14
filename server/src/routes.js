const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = (app) => {
  // Routes 
  app.post('/register', 
    AuthenticationController.register);
};
