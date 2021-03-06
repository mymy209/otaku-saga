const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    watchlist: [{
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Anime'
    }],
    googleId: String, 
    created: [{
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Anime'
    }]
  }, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
