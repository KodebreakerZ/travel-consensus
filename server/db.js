





pg.schema.createTableIfNotExists('table', function(table) {
  table.increments();
  table.string('name');
  table.timestamps();
}).then(function(success) {
  console.log('success!', success)
})

pg('table').insert({name: 'jon'}).returning('*')
  .then(function(result) {
    console.log('insertion result:', result);
  })

pg('table').select()
  .then(function(result){
    console.log('select result:', result)
  })

