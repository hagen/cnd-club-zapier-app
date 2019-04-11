/**
 * Pulls session Id (key) from response to login request.
 * @param {Zapier} z Zapier utils
 * @param {Object} bundle Zap bundle
 */
const getSessionKey = (z, bundle) => {
  const promise = z.request({
    method: 'POST',
    url: 'https://www.carnextdoor.com.au/api/v1/auth',
    body: {
      email: bundle.authData.email,
      password: bundle.authData.password
    }
  });

  return promise.then(response => {
    if (response.status === 401) {
      throw new Error('The email/password you supplied is invalid');
    }
    return {
      sessionKey: z.JSON.parse(response.content).auth.token
    };
  });
};




/**
 * Session auth config
 */
const authentication = {
  type: 'session',
  test: {
    url: 'https://www.carnextdoor.com.au/api/v1/vehicles'
  },
  fields: [
    {
      key: 'email',
      type: 'string',
      required: true,
      helpText: 'Your login email.'
    },
    {
      key: 'password',
      type: 'password',
      required: true,
      helpText: 'Your login password.'
    }
  ],
  
  sessionConfig: {
    perform: getSessionKey
  },

  connectionLabel: (z, bundle) => {
    if (bundle.authData.email) {
      return bundle.authData.email;
    }
    return 'Car Next Door'
  }
};





/**
 * Adds session Id to req header, if we have a session key in the
 * auth data (otherwise, does nothing - e.g. for log in).
 * @param {Response} response API response
 * @param {Zapier} z Zapier utils
 * @param {Object} bundle Zap bundle
 */
const includeSessionKeyHeader = (request, z, bundle) => {
  if (bundle.authData.sessionKey) {
    request.headers = request.headers || {};
    request.headers['x-cnd-token'] = bundle.authData.sessionKey;
  }
  return request;
};





/**
 * Checks if a 401 was returned. If so, flags Refresh of auth required.
 * Otherwise, returns response.
 * @param {Response} response API response
 * @param {Zapier} z Zapier utils
 * @param {Object} bundle Zap bundle
 */
const sessionRefreshIf401 = (response, z, bundle) => {
  if (bundle.authData.sessionKey) {
    if (response.status === 401) {
      throw new z.errors.RefreshAuthError(); // ask for a refresh & retry
    }
  }
  return response;
};





module.exports = {
  authentication,
  includeSessionKeyHeader,
  sessionRefreshIf401
}
