const constants = require('../constants');
const config = require('./env');

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : config.DB_HOST || localhost,
    user : config.DB_USERNAME || root,
    password : config.DB_PASSWORD || root,
    database : constants.DB_NAME
  },
  debug: true
});

module.exports = knex;