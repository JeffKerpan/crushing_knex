'use strict';

const express = require('express');
const router = express.Router();
const knex = require('./knex');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extened: false}));
router.use(bodyParser.json());

router.get('/:path', (req, res, next) => {
  const path = req.params.path;
  knex(path).then(function (info) {
    res.send(info);
  });
});

router.get('/festival/:id', (req, res, next) => {
  const id = req.params.id;
  knex('festival')
    .where('festival.id', id)
    .select('festival.name AS festival_name', 'festival.location', 'festival.date', 'festival.cost', 'artist.name AS artist_name')
    .join('festival_artist',  'festival.id', 'festival_artist.festival_id')
    .join('artist', 'festival_artist.artist_id', 'artist.id')
    .then(festival => res.send(festival));
});


router.get('/artist/:id', (req, res, next) => {
  const id = req.params.id;
  knex('artist')
    .select('artist.name AS artist_name', 'instrument.name AS instrument_name', 'genre.name AS genre_name')
    .where('artist.id', id)
    .join('instrument', 'artist.id', 'instrument.artist_id')
    .join('genre', 'artist.id', 'genre.artist_id')
    .then(artist => res.send(artist));
});

router.put('/:name', (req, res, next) => {
  const path = req.params.name;
  const body = req.body;
  knex()
    .insert(body, body)
    .into(path);
});

router.patch('/:name/:id', (req, res, next) => {
  const path = req.params.name;
  const id = req.params.id;
  const body = req.body;
  knex(path)
    .where('id', id)
    .update(body);
});

router.delete('/:name/:id', (req, res, next) => {
  const path = req.params.name;
  const id = req.params.id;
  knex(path)
    .del();
});


module.exports = router;
