const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true
  }, 
  altTitle: String, 
  genre: {
    type: [String], 
    enum: ['Action', 'Adventure', 'Comedy', 'Drama', 'Slice of Life', 'Fantasy', 'Magic', 'Supernatural', 'Horror', 'Mystery', 'Psychological', 'Romance', 'Sci-Fi'],
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


