const {pick} = require('lodash');
/**
 * List all cars of the member.
 * @param {Zapier} z Zapier utils
 */
async function listCars(z) {
  const requestOptions = {
    url: `https://www.carnextdoor.com.au/api/v2/cars`,
    method: 'GET'
  };
  return z
    .request(requestOptions)
    .then(response => z.JSON.parse(response.content).cars)
    .then(cars => cars.map(car => pick(car, ['id', 'make', 'model', 'plate'])))
    .then(cars =>
      cars.map(car => ({
        ...car,
        name: `${car.make} ${car.model} (${car.plate})`
      }))
    );
}

const vehicle = {
  key: 'vehicleResource',
  noun: 'Vehicles',
  list: {
    display: {
      hidden: true,
      label: 'Cars',
      description: 'Your registered car'
    },
    operation: {
      perform: listCars,
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
