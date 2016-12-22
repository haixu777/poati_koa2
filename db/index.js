let Sequelize = require('sequelize');
let config = require('../config');

let sequelize = new Sequelize(config.mysql.table, config.mysql.user, config.mysql.pwd, {
  host: config.mysql.host,
  dialect: config.mysql.dialect
})

sequelize.sync().then(function() {
  console.log(`connect ${process.env.NODE_ENV} database success!`)
}).catch(function(err) {
  console.log(`${err}`);
})

module.exports = sequelize;
