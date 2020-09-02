const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true
  }, 
  altTitle: String, 
  genre: {
    type: [String], 
    required: true
  },
  seasons: {
    type: Number, 
    required: true
  }
}, {
  timestamps: true
});


module.exports = mongoose.model('Anime', animeSchema);


