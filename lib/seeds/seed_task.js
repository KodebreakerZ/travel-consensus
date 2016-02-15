exports.seed = function(knex, Promise) {
  return knex('task').truncate()
    .then(function() {
      return knex('task').insert([
        {
          name: 'Food', status: 'undecided',
          decision: null, id_trip: 3
        },
        {
          name: 'Hotel', status: 'decided',
          decision: 'Hilton', id_trip: 1
        },
        {
          name: 'Event', status: 'decided',
          decision: 'Comedy Show', id_trip: 2
        },
        {
          name: 'Food', status: 'undecided',
          decision: null, id_trip: 2
        },
        {
          name: 'Hotel', status: 'decided',
          decision: 'Paris', id_trip: 3
        },
        {
          name: 'Event', status: 'decided',
          decision: 'Rally', id_trip: 1
        },

        {
          name: 'Food', status: 'undecided',
          decision: null, id_trip: 1
        },
        {
          name: 'Hotel', status: 'decided',
          decision: 'Basement', id_trip: 2
        },
        {
          name: 'Event', status: 'decided',
          decision: 'Pig race', id_trip: 3
        },
      ])
    })
    .catch(function(error) {
      console.error('error seeding tasks', error)
    })
};
