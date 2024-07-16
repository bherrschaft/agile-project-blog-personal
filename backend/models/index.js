const sequelize = require('../config/database');
const Post = require('./post');

const initDb = async () => {
  await sequelize.sync();
};

module.exports = { initDb, Post };
