let Sequelize = require('sequelize');
let config = require('../config');

let sequelize = new Sequelize(config.db_database, config.db_username, config.db_password, {
  host: config.db_host,
  dialect: config.db_dialect
})

sequelize.sync().then(function() {
  console.log(`connect ${process.env.NODE_ENV} database success!`)
}).catch(function(err) {
  console.log(`${err}`);
})

module.exports = sequelize;
