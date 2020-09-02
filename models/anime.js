const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
  title: String
}, {
  timestamps: true
});


module.exports = mongoose.model('Anime', animeSchema);


