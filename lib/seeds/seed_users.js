
exports.seed = function(knex, Promise) {
  return knex('users').truncate()
    .then(function() {
      return knex('users').insert([
        {
          username: 'Zack', email: 'sample@sample.com',
          password: 'babel'
        },
        {
          username: 'J-man', email: 'notsample@gmail.com',
          password: 'webmaster'
        },
        {
          username: 'Sammy', email: 'sammy@yahoo.com',
          password: 'password'
        }
      ])
    })
    .catch(function(error) {
      console.error('error seeding users', error)
    })
};
