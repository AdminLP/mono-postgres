const pg = require('pg');
const Sequelize = require('sequelize');

module.exports = ({ conf }) => {
  const { sequelize } = conf.mono;

  if (!sequelize) throw new Error('No `mono.sequelize` configuration found');

  const {
    database, username, password, options,
  } = sequelize;
  if (!database) throw new Error('No `mono.sequelize.database` configuration found');
  if (!username) throw new Error('No `mono.sequelize.username` configuration found');
  if (!password) throw new Error('No `mono.sequelize.password` configuration found');
  if (!options) throw new Error('No `mono.sequelize.options` configuration found');
  if (!options.host) throw new Error('No `mono.sequelize.options.host` configuration found');

  pg.defaults.parseInt8 = true;

  const db = new Sequelize(database, username, password, options);

  module.exports.db = db;
};
