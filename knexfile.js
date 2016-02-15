/*
  DATABASE CONFIGURATION

    Postico is a fantastic postgresql database visualizer
    'psql db/' is a great tool for command-line db access.

  Hi! To get a brand-new development database up and running:
    > navigate to project directory
    > ensure PostGreSql is installed
      > run postgres in your terminal and see if you have anything
        > if not, 'brew install postgres'
    > run 'initdb db/'
    > run 'createdb db/dev'
    > A database server must be up and running to test and develop!
      > open a new terminal, make sure you're in the project root directory
      > run 'postgres -D db/'

    The database should be up and grump-ily accepting connections
    go ahead and run npm start/test to get a server or test running.

  ************************************

    UPDATING DATABASE SCHEMA

    The 'migrations' folder helps us to keep track of database schema changes
    and will simplify updates as our postgresql becomes more complex and we have
    a longer version history.
    When making changes to the database schema:
      > run 'npm install -g knex' to access knex CLI
      > run 'knex migrate:make consensus' to create a new, timestamped schema file
      > Copy the previous schema and paste it into the new migration file
      > Make any changes!
*/

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'development'
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    },
    debug: true,
  },

  test: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'test'
    },
    seeds: {
      directory: './lib/seeds'
    },
    debug: true,
  },
};















