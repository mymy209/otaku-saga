const mongoose = require('mongoose');
const Anime = require('../models/anime');

module.exports = {
    index, 
    create, 
    delete: delAnime
}

function index(req, res) {
    Anime.find({}, function(err, animes){
        //console.log(animes);
        res.render('animes/index', {animes, user: req.user});
    });
}

function create(req, res) {
    const anime = new Anime(req.body);
    anime.save(function (err) {
        res.redirect('/animes/index');
    });
}

function delAnime(req, res) {
    Anime.findByIdAndDelete(req.params.id, function(err) {
        res.redirect('/animes/index');
    });
}