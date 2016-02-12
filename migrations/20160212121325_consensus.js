
exports.up = function(knex, Promise) {
  return Promise.all([

        knex.schema.createTable('users', function(table) {
            table.increments('uid').primary();
            table.string('username');
            table.string('password');
            table.string('name');
            table.string('email');
            table.timestamps();
        }),

        // knex.schema.createTable('whosit', function(table) {
        //   table.string('whatsit');
        //   // etc..
        // }),

      ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
        // knex.schema.dropTableIfExists('trip'),
        knex.schema.dropTableIfExists('users'),
        // knex.schema.dropTableIfExists('task'),
        // knex.schema.dropTableIfExists('message')
        // knex.schema.dropTableIfExists('suggestion'),
    ])
};