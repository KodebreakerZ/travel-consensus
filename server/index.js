var browserify = require('browserify-middleware')
var express = require('express')
var Path = require('path')
var Reactify = require('reactify')

var routes = express.Router()

// Commented out because these require a configured and running database.
// var tripRouter = require('./apis/trip-api');
// var taskRouter = require('./apis/task-api');

/* --- Added Reactify require and "...transform: [Reactify]" ---  */
routes.get('/app-bundle.js',
  browserify('./client/app.js', {
    transform: [Reactify]
  }))

/* Example endpoint (also tested in test/server/index_test.js) */
routes.get('/api/tags-example', function(req, res) {
  res.send(['node', 'express', 'browserify', 'react', 'react-dom'])
})

/* Static assets (html, etc.) */
var assetFolder = Path.resolve(__dirname, '../client/public')
routes.use(express.static(assetFolder))


if (process.env.NODE_ENV !== 'test') {
  // We're in development or production mode;
  // create and run a real server.
  var app = express()

  // use Morgan to log concise and colorful http information
  app.use( require('morgan')('dev') )
  // Parse incoming request bodies as JSON
  app.use( require('body-parser').json() )

  // Mount our main router, 'routes' to the root path
  // of our app. This delegates almost all routing to 'routes'
  app.use('/', routes)

/*
  These handle requests directed to different models.

  They are commented because they require a running development
  database. When you're ready to use sample data and the database
  we can talk about how to do it. Just a few extra things to do.
*/
  var tripRouter = require('./apis/trip-api');
  var taskRouter = require('./apis/task-api');

  routes.use('/trip', tripRouter);
  routes.use('/task', taskRouter);


  //
  // The Catch-all Route
  // This is for supporting browser history pushstate.
  // NOTE: Make sure this route is always LAST.
  //
  routes.get('/*', function(req, res){
    console.log('catch-all route triggered');
    res.sendFile( assetFolder + '/index.html' )
  })

  // Start the server!
  var port = process.env.PORT || 4000
  app.listen(port)
  console.log("Listening on port", port)
}
else {
  // We're in test mode; make this file importable instead.
  module.exports = routes
}
