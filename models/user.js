const mongoose = require('mongoose');

const watchSchema = new mongoose.Schema({
  title: String
}, {
  timestamps: true
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    watchlist: [watchSchema],
    googleId: String
  }, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
