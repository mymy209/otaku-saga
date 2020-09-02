const mongoose = require('mongoose');
const Anime = require('../models/anime');

module.exports = {
    index, 
    edit, 
    show,
    search,
    new: newAnime, 
    create, 
    delete: delAnime
}

function edit(req, res) {
    Anime.findById(req.params.id, function(err, anime){
        res.render('animes/edit');
    });
}

function newAnime(req, res) {
    res.render('animes/new');
}

function show(req, res) {
    console.log(req.params.id);
    Anime.findById(req.params.id, function(err, anime) {
        console.log(anime);
        res.render('animes/show', {anime});
    });
};

function search(req, res, next) {
    console.log(req.query.anime);
    Anime.find({ title: req.body.anime}).sort().exec(function(err, animes) {
        if (err) return next(err);
        console.log(animes);
        res.render('animes/index', { animes, title: req.query.name});
    });
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
        if (err) return res.render('animes/new');
        res.redirect('/animes/index');
    });
}

function delAnime(req, res) {
    Anime.findByIdAndDelete(req.params.id, function(err) {
        res.redirect('/animes/index');
    });
}