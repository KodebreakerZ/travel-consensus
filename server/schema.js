pg.schema.createTableIfNotExists('trip', function (table) {
	table.increments('id').primary();
});

pg.schema.createTableIfNotExists('user', function (table) {
	table.increments('id').primary();
	table.string('name').notNullable();
	table.string('email').unique().notNullable();
	table.string('nickname').notNullable();
	//will replace with password hash
	table.string('password').notNullable();
});

pg.schema.createTableIfNotExists('trip_user', function (table) {
	table.increments('id').primary();
	table.integer('id_trip').references('id').inTable('trip');
	table.integer('id_user').references('id').inTable('user');
});

pg.schema.createTableIfNotExists('task', function (table) {
	table.increments('id').primary();
	table.string('name').notNullable();
	//will set default after decision on wording is made
	table.string('status').defaultTo('');
	table.string('decision').nullable();
	table.integer('id_trip').references('id').inTable('trip');
});

pg.schema.createTableIfNotExists('message', function (table) {
	table.increments('id').primary();
	table.timestamp('createdAt').defaultTo(pg.fn.now());
	table.string('content', 1000).notNullable();
	table.integer('id_task').references('id').inTable('task');
	table.integer('id_user').references('id').inTable('user');
});

//will replace default with correct table name after decision on wording is made
pg.schema.createTableIfNotExists('default', function (table) {
	table.increments('id').primary();
	table.string('suggestion').notNullable();
	table.integer('votes').defaultTo(0);
	table.timestamp('createdAt')defaultTo(pg.fn.now());
	table.integer('id_task').references('id').inTable('task');
	table.integer('id_user').references('id').inTable('user');
	table.integer('id_trip').references('id').inTable('trip');
});

