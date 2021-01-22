// Update with your config settings.

require("dotenv").config({path: "./variables.env"});

module.exports = {
    client: 'mysql',
    connection: {
      database: process.env.DATABASE,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
