'use strict';

const pg = require('pg');

const environment = process.env.NODE_EVN || 'development';
const knexConfig = require('./knexfile')[environment];
const knex = require('knex')(knexConfig);

module.exports = knex;
