const dbConfig = require('../config/db');

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbConfig);


const models = {
    star: require('./star')(sequelize),
    user: require('./user')(sequelize),
}

models.user.hasMany(models.user);

const db = {
    ...models,
    sequelize,
}

module.exports = db;