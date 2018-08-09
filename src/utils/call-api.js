import fetch from 'isomorphic-fetch';
import config from '../config';

export default function callApi(endpoint, token, options, payload) {
  const authHeaders = token
    ? {
      Authorization: `Bearer ${token}`,
    }
    : {};

  return fetch(`${config.API_URI}/${endpoint}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...authHeaders,
    },
    body: JSON.stringify(payload),
    ...options,
  })
    .then(response => response.json())
    .then((json) => {
      if (json.success) {
        return json;
      }

      throw new Error(json.message);
    });
}
