const knex = require('knex');

require('dotenv').config();

const environment = process.env.DB_ENV || 'development';
const config = require('../knexfile')[environment];
const database = require('knex')(config);

module.exports = database;