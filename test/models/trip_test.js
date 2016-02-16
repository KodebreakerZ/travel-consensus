"use strict"
require(TEST_HELPER) // <--- This must be at the top of every test file.

const Trip = require(__models + '/trip');
const db   = require('../../lib/db');
const dbCleaner = require('knex-cleaner');

describe('Trip model', function() {
  describe('interface with database', function() {

    beforeEach(function() {
      return dbCleaner.clean(db, {mode: 'truncate'})
        .then(function() {
          return db('trip').insert([
            {
              name: 'Denver'
            },
            {
              name: 'San Cristobal'
            },
            {
              name: 'Bed'
            }
          ])
        })
    })

    it ('should create a new trip', function * () {
      let newTrip = {
        name: 'Bat Cave'
      }

      yield Trip.create(newTrip)
        .then(function(newTrip) {
          console.log('created new trip:', newTrip);
          expect(newTrip.name).to.equal('Bat Cave');
        })
        .catch(reportError('creating new valid trip'));
    })

    it ('should associate a user with a trip', function * () {
      let newTrip_User = {
        id_trip: 2,
        id_user: 1
      }
      yield Trip.addUser(newTrip_User)
        .then(function(newRelationship) {
          expect(newRelationship).to.deep.equal({ id_trip: 2, id_user: 1 });
        })
        .catch(reportError('creating new trip_user relationship'));

      yield Trip.allOfUser(1)
        .then(function(trips) {
          expect(trips).to.have.length(1);
          expect(trips[0].name).to.equal('San Cristobal');
        })
        .catch(reportError('finding trips of user'));
    })

    it ('should report no trips for a user without any', function * () {
      yield Trip.allOfUser(404)
        .then(function(trips) {
          expect(trips).to.have.length(0);
        })
    })

  }) // interface with database
})
