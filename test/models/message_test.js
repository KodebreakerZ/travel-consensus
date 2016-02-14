require(TEST_HELPER) // <--- This must be at the top of every test file.

var request = require('supertest')

describe('Message model', function() {

  var app = TestHelper.createApp()

  describe('interface with database', function() {

    it ('should ')

    it("serves an example endpoint", function * () {
      yield request(app)
        .get('/api/tags-example')
        .expect(200)
        .expect(function(response) {
          expect(response.body).to.include('node')
        })
    })


  })
})
