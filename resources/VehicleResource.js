const { pick } = require('lodash');
/**
 * List all cars of the member.
 * @param {Zapier} z Zapier utils
 */
async function listVehicles(z) {
  const requestOptions = {
    url: `https://www.carnextdoor.com.au/api/v1/vehicles`,
    method: 'GET',
  }
  return z.request(requestOptions)
    .then((response) => z.JSON.parse(response.content).vehicles)
    .then(vehicles => vehicles.map(vehicle => pick(vehicle, [
      'id',
      'make',
      'model',
      'plate'
    ])))
    .then(vehicles => vehicles.map(vehicle => ({
      ...vehicle,
      name: `${vehicle.make} ${vehicle.model} (${vehicle.plate})`
    })));
}



const vehicle = {
  key: 'vehicleResource',
  noun: 'Vehicles',
  list: {
    display: {
      hidden: true,
      label: 'Vehicles',
      description: 'Your registered vehicle'
    },
    operation: {
      perform: listVehicles,
      sample: {
        id: 1,
        make: `Toyota`,
        model: `Camry`,
        name: 'Toyota Camry',
        plate: 'CNDRLZ'
      }
    }
  }
};
module.exports = vehicle;