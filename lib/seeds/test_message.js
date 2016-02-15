
exports.seed = function(knex, Promise) {
  return knex('message').truncate()
    .then(funciton() {
      return knex('message').insert([
        {
          content: 'hey',
          id_task: 1, id_user: 1
        },
        {
          content: 'i like turtles',
          id_task: 4, id_user: 2
        },
        {
          content: 'i like turtles',
          id_task: 6, id_user: 3
        },
        {
          content: 'content',
          id_task: 5, id_user: 1
        },
        {
          content: 'more content',
          id_task: 3, id_user: 3
        },
        {
          content: 'this is content',
          id_task: 7, id_user: 2
        },
        {
          content: 'i like content',
          id_task: 2, id_user: 1
        },
        {
          content: 'this is not content',
          id_task: 9, id_user: 3
        },
        {
          content: 'as all internet debates, youre being a nazi',
          id_task: 8, id_user: 2
        }
      ])
    });
};
