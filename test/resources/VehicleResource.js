require('should');
const MS_TIMEOUT = 15000
const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('# vehicle resource', function() {
  
  this.timeout(MS_TIMEOUT)
  
  before(async () => {
    // Inject vars from .env - testing only
    zapier.tools.env.inject();
  })

  it('should load vehicles', async () => {
    const bundle = {
      authData: {
        sessionKey: process.env.X_CND_TOKEN
      }
    };
    let results = await appTester(App.resources.vehicleResource.list.operation.perform, bundle);
      
    results.should.be.an.Array;
    results.length.should.equal(1);
  }).timeout(MS_TIMEOUT);

  after(async () => {

  })

});