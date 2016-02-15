
exports.seed = function(knex, Promise) {
  return knex('trip').truncate()
    .then(function() {
      return knex('trip').insert([
        {
          name: 'Denver'
        },
        {
          name: 'San Cristobal'
        },
        {
          name: 'Bed'
        },
      ])
    })
    .catch(function(error) {
      console.error('error seeding trips', error)
    })
};
