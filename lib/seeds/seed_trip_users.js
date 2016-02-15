exports.seed = function(knex, Promise) {
  return knex('trip_users').truncate()
    .then(function() {
      return knex('trip_users').insert([
        {
          id_user: 2, id_trip: 1
        },
        {
          id_user: 2, id_trip: 3
        },
        {
          id_user: 1, id_trip: 3
        },
        {
          id_user: 3, id_trip: 3
        },
        {
          id_user: 3, id_trip: 2
        },
        {
          id_user: 1, id_trip: 2
        },
      ])
    })
    .catch(function(error) {
      console.error('error seeding trip_users', error)
    })
};
