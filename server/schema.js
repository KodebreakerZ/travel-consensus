pg.schema.createTableIfNotExists('trip', function (table) {
	table.increments('id').primary();
});

pg.schema.createTableIfNotExists('user', function (table) {
	table.increments('id').primary();
	table.string('name');
	table.string('email').unique();
	table.string('nickname');
	table.string('password');
});

pg.schema.createTableIfNotExists('trip_user', function (table) {
	table.increments('id').primary();
	table.integer('id_trip').references('id').inTable('trip');
	table.integer('id_user').references('id').inTable('user');
});

pg.schema.createTableIfNotExists('task', function (table) {
	table.increments('id').primary();
	table.string('name');
	table.string('status');
	table.string('decision');
	table.integer('id_trip').references('id').inTable('trip');
});

pg.schema.createTableIfNotExists('message', function (table) {
	table.increments('id').primary();
	table.timestamp('createdAt');
	table.string('content', 1000);
	table.integer('id_task').references('id').inTable('task');
	table.integer('id_user').references('id').inTable('user');
});

pg.schema.createTableIfNotExists('', function (table) {
	table.increments('id').primary();
	table.string('suggestion');
	table.integer('votes');
	table.timestamp();
	table.integer('id_task').references('id').inTable('task');
	table.integer('id_user').references('id').inTable('user');
	table.integer('id_trip').references('id').inTable('trip');
});



