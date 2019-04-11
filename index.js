const VehicleResource = require('./resources/VehicleResource');

const BookingCreatedTrigger = require('./triggers/BookingCreatedTrigger');
const BookingUpdatedTrigger = require('./triggers/BookingUpdatedTrigger');
const BookingCancelledTrigger = require('./triggers/BookingCancelledTrigger');

// Auth!
const { authentication, includeSessionKeyHeader, sessionRefreshIf401 } = require('./util/authentication')

// Now we can roll up all our behaviors in an App.
const App = {

  // This is just shorthand to reference the installed dependencies you have. Zapier will
  // need to know these before we can upload
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication,
  beforeRequest: [includeSessionKeyHeader],
  afterResponse: [sessionRefreshIf401],

  /**
   * Account is a resource, as we basically always need to pick
   * and account before we configure triggers.
   */
  resources: {
    [VehicleResource.key]: VehicleResource
  },

  triggers: {
    [BookingCreatedTrigger.key]: BookingCreatedTrigger,
    [BookingUpdatedTrigger.key]: BookingUpdatedTrigger,
    [BookingCancelledTrigger.key]: BookingCancelledTrigger
  },

  /*
    SEARCHES
   */
  searches: {},

  // If you want your creates to show up, you better include it here!
  creates: {}
};

// Finally, export the app.
module.exports = App;
