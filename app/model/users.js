let Sequelize = require('sequelize');
let db = require('../../db');

let users = db.define('sample_keywords', {
  sample_keyword: Sequelize.STRING,
  sample_topicsID: Sequelize.STRING,
  is_sync: Sequelize.STRING
}, {
  timestamps: false
});

module.exports = users;
