
exports.seed = function(knex, Promise) {
  return knex('message').truncate()
    .then(function() {
      return knex('message').insert([
        {
          content: 'hey',
          id_task: 1, id_user: 1
        },
        {
          content: 'howdy',
          id_task: 1, id_user: 3
        },
        {
          content: 'how do you feel?'
          id_task: 1, id_user: 3
        },
        {
          content: 'with my hands, mostly',
          id_task: 1, id_user: 1
        },
        {
          content: 'i like turtles',
          id_task: 2, id_user: 1
        },
        {
          content: 'i like turtles, too',
          id_task: 2, id_user: 2
        },
        {
          content: 'content',
          id_task: 2, id_user: 1
        },
        {
          content: 'more content',
          id_task: 3, id_user: 3
        },
        {
          content: 'this is content',
          id_task: 3, id_user: 2
        },
        {
          content: 'i like content',
          id_task: 3, id_user: 1
        },
        {
          content: 'content overload',
          id_task: 3, id_user: 3
        },
        {
          content: 'there is snow on the ceiling',
          id_task: 4, id_user: 2
        },
        {
          content: "no there isn't",
          id_task: 4, id_user: 1
        },
        {
          content: "sammy, isn't there snow on the ceiling",
          id_task: 4, id_user: 2
        },
        {
          content: "yeah, I can't figure out for the life of me how it got there though",
          id_task: 4, id_user: 3
        },
        {
          content: "you're not going to fool me again, guys",
          id_task: 4, id_user: 1
        },
        {
          content: '* looks up *',
          id_task: 4, id_user: 1
        },
        {
          content: 'Damnit!',
          id_task: 4, id_user: 1
        },
        {
          content: "what do a cactus and a porcupine have in common?",
          id_task: 5, id_user: 3
        },
        {
          content: "yeah! you! there at the computer - what is it?",
          id_task: 5, id_user: 3
        },
        {
          content: 'favorite color?',
          id_task: 6, id_user: 3
        },
        {
          content: 'orange',
          id_task: 6, id_user: 2
        },
        {
          content: 'wrong',
          id_task: 6, id_user: 3
        },
        {
          content: 'this is not content',
          id_task: 9, id_user: 3
        },
        {
          content: "as all internet debates, you're being a nazi",
          id_task: 8, id_user: 2
        }
      ])
    })
    .catch(function(error) {
      console.error('error seeding messages', error)
    })
};
