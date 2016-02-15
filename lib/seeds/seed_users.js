
exports.seed = function(knex, Promise) {
  return knex('users').truncate()
    .then(function() {
      return knex('users').insert([
        {
          name: 'Zachary F', email: 'sample@sample.com',
          nickname: 'Zack', password: 'babel'
        },
        {
          name: 'Jon K', email: 'notsample@gmail.com',
          nickname: 'J-man', password: 'webmaster'
        },
        {
          name: 'Sammy H', email: 'sammy@yahoo.com',
          nickname: 'Sammy', password: 'password'
        }
      ])
    })
    .catch(function(error) {
      console.error('error seeding users', error)
    })
};
