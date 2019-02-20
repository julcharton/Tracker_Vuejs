const { Song } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10,
      });
      res.send(songs);
    } catch (err) {
      // console.log('WE ARE HERE', err);
      res.status(400).send({
        error: 'An Error has occured trying to fetch songs.',
      });
    }
  },
  async post(req, res) {
    try {
      const song = await Song.create(req.body);
      const songJson = song.toJSON();
      res.send({
        user: songJson,
      });
    } catch (err) {
      res.status(400).send({
        error: 'An Error has occured trying to create song.',
      });
    }
  },
};
