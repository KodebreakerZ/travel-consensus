
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    // knex('suggestion').del(),
    // knex('user').del(),
    // knex('message').del(),
    // knex('trip').del(),
    // knex('task').del(),
    // knex('trip_user').del(),


    // Inserts seed entries
    knex('trip').insert({name: 'Denver'}),
    knex('trip').insert({name: 'San Cristobal'}),
    knex('trip').insert({name: 'Bed'}),

    knex('user').insert({name: 'Zachary F', email: 'sample@sample.com', nickname: 'Zack', password: 'babel'}),
    knex('user').insert({name: 'Jon K', email: 'notsample@gmail.com', nickname: 'J-man', password: 'webmaster'}),
    knex('user').insert({name: 'Sammy H', email: 'sammy@yahoo.com', nickname: 'Sammy', password: 'password'}),

    /*
      TASK ORDER OF INSERTION IS IMPORTANT

      Determines the primary key IDs, which are referenced explicitly later
    */
    knex('task').insert({name: 'Food', status: 'undecided', decision: null, id_trip: 3}),
    knex('task').insert({name: 'Hotel', status: 'decided', decision: 'Hilton', id_trip: 1}),
    knex('task').insert({name: 'Event', status: 'decided', decision: 'Comedy Show', id_trip: 2}),

    knex('task').insert({name: 'Food', status: 'undecided', decision: null, id_trip: 2}),
    knex('task').insert({name: 'Hotel', status: 'decided', decision: 'Paris', id_trip: 3}),
    knex('task').insert({name: 'Event', status: 'decided', decision: 'Rally', id_trip: 1}),

    knex('task').insert({name: 'Food', status: 'undecided', decision: null, id_trip: 1}),
    knex('task').insert({name: 'Hotel', status: 'decided', decision: 'Basement', id_trip: 2}),
    knex('task').insert({name: 'Event', status: 'decided', decision: 'Pig race', id_trip: 3}),

    knex('message').insert({content: 'hey', id_task: 1, id_user: 1}),
    knex('message').insert({content: 'i like turtles', id_task: 4, id_user: 2}),
    knex('message').insert({content: 'i like turtles', id_task: 6, id_user: 3}),
    knex('message').insert({content: 'content', id_task: 5, id_user: 1}),
    knex('message').insert({content: 'more content', id_task: 3, id_user: 3}),
    knex('message').insert({content: 'this is content', id_task: 7, id_user: 2}),
    knex('message').insert({content: 'i like content', id_task: 2, id_user: 1}),
    knex('message').insert({content: 'this is not content', id_task: 9, id_user: 3}),
    knex('message').insert({content: 'as all internet debates, youre being a nazi', id_task: 8, id_user: 2}),

    knex('trip_user').insert({ id_user: 2, id_trip: 1 }),

    knex('trip_user').insert({ id_user: 2, id_trip: 3 }),
    knex('trip_user').insert({ id_user: 1, id_trip: 3 }),
    knex('trip_user').insert({ id_user: 3, id_trip: 3 }),

    knex('trip_user').insert({ id_user: 3, id_trip: 2 }),
    knex('trip_user').insert({ id_user: 1, id_trip: 2 }),

    knex('suggestion').insert({ suggestion: 'jimmy johns', votes: 1, id_task: 7, id_user: 2, id_trip: 1 }),

    knex('suggestion').insert({ suggestion: 'a funny one', votes: 2, id_task: 3, id_user: 1, id_trip: 2 }),
    knex('suggestion').insert({ suggestion: 'moms basement', id_task: 8, id_user: 3, id_trip: 2 }),

    knex('suggestion').insert({ suggestion: 'Paris', votes: 3, id_task: 5, id_user: 3, id_trip: 3 }),
    knex('suggestion').insert({ suggestion: 'Jimmy John', votes: 1, id_task: 1, id_user: 2, id_trip: 3 })

  );
};


