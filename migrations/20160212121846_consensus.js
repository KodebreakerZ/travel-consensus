
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('trip', function (table) {
      table.increments('id').primary();
      table.string('name').notNullable().defaultTo('Unknown');

    }),

    knex.schema.createTable('user', function (table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').unique().notNullable();
      table.string('nickname').notNullable();
      //will replace with password hash
      table.string('password').notNullable();
    }),

    knex.schema.createTable('trip_user', function (table) {
      table.increments('id').primary();
      table.integer('id_trip').references('id').inTable('trip');
      table.integer('id_user').references('id').inTable('user');
    }),

    knex.schema.createTable('task', function (table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      //will set default after decision on wording is made
      table.string('status').defaultTo('');
      table.string('decision').nullable();
      table.integer('id_trip').references('id').inTable('trip');
    }),

    knex.schema.createTable('message', function (table) {
      table.increments('id').primary();
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.string('content', 1000).notNullable();
      table.integer('id_task').references('id').inTable('task');
      table.integer('id_user').references('id').inTable('user');
    }),

    //will replace default with correct table name after decision on wording is made
    knex.schema.createTable('suggestion', function (table) {
      table.increments('id').primary();
      table.string('suggestion').notNullable();
      table.integer('votes').defaultTo(0);
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.integer('id_task').references('id').inTable('task');
      table.integer('id_user').references('id').inTable('user');
      table.integer('id_trip').references('id').inTable('trip');
    })

  ])
  .catch(function(error) {
    console.log('error in schematifying tables')
  })
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('trip'),
    knex.schema.dropTableIfExists('user'),
    knex.schema.dropTableIfExists('trip_user'),
    knex.schema.dropTableIfExists('task'),
    knex.schema.dropTableIfExists('message'),
    knex.schema.dropTableIfExists('suggestion'),
  ])
  .catch(function(error) {
    console.log('error in dropping schematified tables')
  })
};
