const dbConfig = require('../config/db');

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbConfig);


const models = {
    star: require('./star')(sequelize),
}

const db = {
    ...models,
    sequelize,
}

module.exports = db;