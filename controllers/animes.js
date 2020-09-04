const mongoose = require('mongoose');
const Anime = require('../models/anime');

module.exports = {
    index, 
    edit, 
    update,
    show,
    search,
    new: newAnime, 
    create, 
    delete: delAnime
}



function update(req, res) {
    Anime.findByIdAndUpdate(req.params.id, {altTitle: req.body.altTitle, genre: req.body.genre, seasons: req.body.seasons}, function(err) {
        res.redirect(`/animes/${req.params.id}`);
    });
}

function edit(req, res) {
    Anime.findById(req.params.id, function(err, anime){
        res.render('animes/edit', {anime});
    });
}

function newAnime(req, res) {
    res.render('animes/new');
}

function show(req, res) {
    Anime.findById(req.params.id, function(err, anime) {
        res.render('animes/show', {anime});
    });
};

function search(req, res, next) {
    if (req.query.anime) {
        Anime.find({$or:[{"title": { "$regex": req.query.anime, "$options": "i" }},{"altTitle": { "$regex": req.query.anime, "$options": "i"}}]}).sort().exec(function(err, animes) {
            if (err) return next(err);
            res.render('animes/index', { animes});
        });
    } else {
        Anime.find({genre: req.query.genre}).sort().exec(function(err, animes) {
            res.render('animes/index', {animes});
        });
    }
}

function index(req, res) {
    Anime.find({}, function(err, animes){
        res.render('animes/index', {animes, user: req.user});
    });
}


function create(req, res) {
    Anime.count({title: req.body.title}, function (err, count){ 
        if(count>0){
            Anime.find({title: req.body.title}, function(err, animes) {
                res.render(`animes/index`, {animes});
            });
        } else {
            const anime = new Anime(req.body);
            anime.save(function (err) {
                if (err) return res.render('animes/new');
                req.user.created.push(anime._id);
                req.user.save(function(err) {
                res.redirect('/animes/index');
            });
            });
        }
    });
}

function delAnime(req, res) {
    Anime.findByIdAndDelete(req.params.id, function(err) {
        res.redirect('/animes/index');
    });
}