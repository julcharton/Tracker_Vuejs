module.exports = (app) => {
  // Routes 
  app.post('/register', (req, res) => {
    res.send({
      message: `Hello ${req.body.email} your user is registered`,
    });
  });
};
