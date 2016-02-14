var pg = require('./db')

/*
	This file initializes the database tables.

	With a running postgres server process (postgres -D)
		> For development:
			'node lib/schema.js'
		> For testing:
			'NODE_ENV=test node lib/schema.js'
*/

/*
	CASCADE continues the drop table operation even if there are
	dependencies such as foreign keys.
*/
Promise.all([
	pg.schema.raw('DROP TABLE IF EXISTS trip CASCADE'),
	pg.schema.raw('DROP TABLE IF EXISTS users CASCADE'),
	pg.schema.raw('DROP TABLE IF EXISTS trip_users CASCADE'),
	pg.schema.raw('DROP TABLE IF EXISTS task CASCADE'),
	pg.schema.raw('DROP TABLE IF EXISTS message CASCADE'),
	pg.schema.raw('DROP TABLE IF EXISTS suggestion CASCADE')
])
.catch(function(error) {
	console.log('error dropping tables', error);
	throw new Error('error dropping tables');
})
.then(createTables)

function createTables() {
	pg.schema.createTableIfNotExists('trip', function (table) {
	  table.increments('id').primary();
	  table.string('name').notNullable().defaultTo('Unknown');
	})
		.catch(function(error) { console.log('error initializing schema:', error) });

	pg.schema.createTableIfNotExists('users', function (table) {
	  table.increments('id').primary();
	  table.string('name').notNullable();
	  table.string('email').unique().notNullable();
	  table.string('nickname').notNullable();
	  //will replace with password hash
	  table.string('password').notNullable();
	})
		.catch(function(error) { console.log('error initializing schema:', error) });

	pg.schema.createTableIfNotExists('trip_users', function (table) {
	  table.increments('id').primary();
	  table.integer('id_trip').references('id').inTable('trip');
	  table.integer('id_user').references('id').inTable('userss');
	})
		.catch(function(error) { console.log('error initializing schema:', error) });

	pg.schema.createTableIfNotExists('task', function (table) {
	  table.increments('id').primary();
	  table.string('name').notNullable();
	  //will set default after decision on wording is made
	  table.string('status').defaultTo('');
	  table.string('decision').nullable();
	  table.integer('id_trip').references('id').inTable('trip');
	})
		.catch(function(error) { console.log('error initializing schema:', error) });

	pg.schema.createTableIfNotExists('message', function (table) {
	  table.increments('id').primary();
	  table.timestamp('createdAt').defaultTo(pg.fn.now());
	  table.string('content', 1000).notNullable();
	  table.integer('id_task').references('id').inTable('task');
	  table.integer('id_user').references('id').inTable('users');
	})
		.catch(function(error) { console.log('error initializing schema:', error) });

	//will replace default with correct table name after decision on wording is made
	pg.schema.createTableIfNotExists('suggestion', function (table) {
	  table.increments('id').primary();
	  table.string('suggestion').notNullable();
	  table.integer('votes').defaultTo(0);
	  table.timestamp('createdAt').defaultTo(pg.fn.now());
	  table.integer('id_task').references('id').inTable('task');
	  table.integer('id_user').references('id').inTable('users');
	  table.integer('id_trip').references('id').inTable('trip');
	})
		.catch(function(error) { console.log('error initializing schema:', error) })

}
