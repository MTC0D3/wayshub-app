require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'mtc0d3',
    database: process.env.DB_NAME || 'wayshub_db',
    host: process.env.DB_HOST || 'mysql',
    dialect: 'mysql'
  },
  test: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME_TEST || 'wayshub_test',
    host: process.env.DB_HOST || 'mysql',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME_PROD || 'wayshub_prod',
    host: process.env.DB_HOST || 'mysql',
    dialect: 'mysql'
  }
};
