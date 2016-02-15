var browserify = require('browserify-middleware')
var express = require('express')
var Path = require('path')
var Reactify = require('reactify')

var routes = express.Router()

//
// Provide a browserified file at a specified path
//

/* --- Added Reactify require and "...transform: [Reactify]" ---  */
routes.get('/app-bundle.js',
  browserify('./client/app.js', {
    transform: [Reactify]
  }))



//
// Example endpoint (also tested in test/server/index_test.js)
//
routes.get('/api/tags-example', function(req, res) {
  res.send(['node', 'express', 'browserify', 'react', 'react-dom'])
})

//
// Static assets (html, etc.)
//
var assetFolder = Path.resolve(__dirname, '../client/public')
routes.use(express.static(assetFolder))


if (process.env.NODE_ENV !== 'test') {

  //
  // The Catch-all Route
  // This is for supporting browser history pushstate.
  // NOTE: Make sure this route is always LAST.
  //
  routes.get('/*', function(req, res){
    console.log('catch-all route triggered');
    res.sendFile( assetFolder + '/index.html' )
  })

  //
  // We're in development or production mode;
  // create and run a real server.
  //
  var app = express()

  // Parse incoming request bodies as JSON
  app.use( require('body-parser').json() )

  // Mount our main router
  app.use('/', routes)

  // Start the server!
  var port = process.env.PORT || 4000
  app.listen(port)
  console.log("Listening on port", port)


}
else {
  // We're in test mode; make this file importable instead.
  module.exports = routes
}







