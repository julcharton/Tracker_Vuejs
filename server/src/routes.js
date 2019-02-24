const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
  // Routes 
  app.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register);
  
  app.post('/login', 
    // AuthenticationControllerPolicy.register,
    AuthenticationController.login);
  
  app.get('/songs', 
  // SongsController.index,
  SongsController.index);
  app.get('/songs/:songId',
    // SongsController.index,
    SongsController.show);
  app.post('/songs', 
  // SongsController.index,
  SongsController.post);
};
