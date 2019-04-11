require('should');
const MS_TIMEOUT = 15000
const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
let vehicle_id;

describe('# booking created trigger', function() {
  
  this.timeout(MS_TIMEOUT)
  
  before(async () => {
    // Inject vars from .env - testing only
    zapier.tools.env.inject();

    vehicle_id = parseInt(process.env.VEHICLE_ID, 10);
  })

  it('should load bookings', async () => {
    const bundle = {
      authData: {
        sessionKey: process.env.X_CND_TOKEN
      },
      inputData: {
        vehicle_id
      }
    };
    let results = await appTester(App.triggers.bookingCreated.operation.perform, bundle);
      
    results.should.be.an.Array;
    results.length.should.equal(1);
  }).timeout(MS_TIMEOUT);

  after(async () => {

  })

});