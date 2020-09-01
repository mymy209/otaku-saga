const request = require('request');
const animeURL = 'https://api.jikan.moe/v3/anime?q=';

module.exports = {
    index
}

function index(req, res) {
    res.render('anime/index');
}
