var pg = require('./db')
var Bluebird = require('bluebird')

/*
	This file will remove all tables from the database
	and on completion re-adds the database tables.

	With a running postgres server process (postgres -D)
		> For development:
			'node lib/schema.js'
		> For testing:
			'NODE_ENV=test node lib/schema.js'
*/


/*
	CASCADE continues the drop table operation even if there are
	dependencies such as foreign keys and raw SQL is required to
	declare CASCADE

	May not be required now that it is in reverse order of dependencies
*/
// Promise.all([
// 	pg.schema.raw('DROP TABLE IF EXISTS suggestion CASCADE'),
// 	pg.schema.raw('DROP TABLE IF EXISTS message CASCADE'),
// 	pg.schema.raw('DROP TABLE IF EXISTS task CASCADE'),
// 	pg.schema.raw('DROP TABLE IF EXISTS trip_users CASCADE'),
// 	pg.schema.raw('DROP TABLE IF EXISTS users CASCADE'),
// 	pg.schema.raw('DROP TABLE IF EXISTS trip CASCADE'),
// ])
// .catch(function(error) {
// 	console.log('error dropping tables', error);
// 	throw new Error('error dropping tables');
// })
// .then(function(droppedTables) {
// 	console.log('dropped all tables!', droppedTables);
// })


/*
	This creates all of the tables of our database.

	TODO: we may have an issue with multiple async functions
	bringing the database to a deadlock error. If this is the
	case, wrapping these functions in Promise.each would
	sequentially call them.
*/
pg.schema.createTableIfNotExists('trip', function (table) {
  table.increments('id').primary();
  table.string('name').notNullable().defaultTo('Unknown');
})
.createTableIfNotExists('users', function (table) {
  table.increments('id').primary();
  table.string('name').notNullable();
  table.string('email').unique().notNullable();
  table.string('nickname').notNullable();
  //will replace with password hash
  table.string('password').notNullable();
})
.createTableIfNotExists('trip_users', function (table) {
  table.increments('id').primary();
  table.integer('id_trip') // .references('id').inTable('trip');
  table.integer('id_user') // .references('id').inTable('users');
})
.createTableIfNotExists('task', function (table) {
  table.increments('id').primary();
  table.string('name').notNullable();
  //will set default after decision on wording is made
  table.string('status').defaultTo('');
  table.string('decision').nullable();
  table.integer('id_trip') // .references('id').inTable('trip');
})
.createTableIfNotExists('message', function (table) {
  table.increments('id').primary();
  table.timestamp('createdAt').defaultTo(pg.fn.now());
  table.string('content', 1000).notNullable();
  table.integer('id_task') // .references('id').inTable('task');
  table.integer('id_user') // .references('id').inTable('users');
})
.createTableIfNotExists('suggestion', function (table) {
  table.increments('id').primary();
  table.string('suggestion').notNullable();
  table.integer('votes').defaultTo(0);
  table.timestamp('createdAt').defaultTo(pg.fn.now());
  table.integer('id_task') // .references('id').inTable('task');
  table.integer('id_user') // .references('id').inTable('users');
  table.integer('id_trip') // .references('id').inTable('trip');
})
.then(function(result) {
	console.log('SUCCESSFULLY BANKED THOSE TABLES');
})
.catch(function(error) {
	console.log('error initializing schema:', error)
})




