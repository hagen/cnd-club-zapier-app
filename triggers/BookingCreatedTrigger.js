const moment = require('moment');
/**
 * List cancelled bookings
 * @param {Zapier} z Zapier utils
 * @param {Object} bundle Zap bundle
 */
function listBookings(z, bundle) {  
  const params = {
    start: moment().format('YYYY-MM-DD'),
    end: moment().add(1, 'month').format('YYYY-MM-DD'),
    type: 'reservation'
  };
  if (bundle.inputData.vehicle_id) {
    params.vehicle_id = bundle.inputData.vehicle_id;
  }

  // You can build requests and our client will helpfully inject all the variables
  // you need to complete. You can also register middleware to control this.
  const requestOptions = {
    url: 'https://3zdecsf5dc.execute-api.ap-southeast-2.amazonaws.com/prod',
    params: params
  };

  // You may return a promise or a normal data structure from any perform method.
  return z.request(requestOptions)
    .then((response) => z.JSON.parse(response.content));
}

// We recommend writing your triggers separate like this and rolling them
// into the App definition at the end.
module.exports = {
  key: 'bookingCreated',
  noun: 'New Booking',
  display: {
    label: 'New Booking',
    description: 'Trigger when a new booking is made.'
  },
  operation: {
    // If we want to filter patients on the webhook side, use this as
    // a filter criteria. Note that the webhook needs to know how to work
    // with these filters.
    inputFields: [
      {
        key: 'vehicle_id',
        required: true,
        label: 'Which car is this trigger for?',
        dynamic: 'vehicleResourceList.id.name'
      }
    ],

    perform: listBookings,

    sample: {
      "id": 91919191,
      "start_at": "2019-04-03T09:30:00",
      "end_at": "2019-04-03T13:15:00",
      "type": "reservation",
      "reservation": {
        "member": {
            "email": "borrower@email.com",
            "mobile": "+61411222333",
            "name": "Borrower Betty"
        }
      }
    },
    outputFields: [
      { key: 'id', label: 'ID' },
      { key: 'start_at', label: 'Starts at' },
      { key: 'end_at', label: 'Ends at' },
      { key: 'type', label: 'Booking type' },
      { key: 'reservation', label: 'Reservation' }
    ]
  }
};
