/*
  DATABASE CONFIGURATION

    Postico is a fantastic postgresql database visualizer!
    'psql db/' is a great tool for command-line db access!

    Hi! To get a brand-new development database up and running:
      > navigate to project directory
      > ensure PostGreSql is installed
        > run 'postgres' in your terminal and see if you have anything
          > if not, 'brew install postgres'
      > 'initdb db/' to initialize a database system
      > 'createdb development' to create a development database
      > A database server must be up and running to test and develop!
        > open a new terminal, make sure you're in the project root directory
        > 'postgres -D db/' to start the database server

      The database should be up and grump-ily accepting connections
      go ahead and run npm start/test to get a server or test running.

  ************************************

  DATABASE TEST SEEDING

    To seed the database with data so that model operations can be tested
    run the above database setup with the following additions:
      > 'npm install -g knex' to access knex on the command line
      > 'postgres -D db/' to start database server
      > 'createdb test' to create a test database
      > 'knex --env test seed:run' to seed the database with data
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















