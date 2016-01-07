import fetch from 'isomorphic-fetch';

export const REQUEST_PETS = 'REQUEST_PETS';
const requestPets = () => {
  return {
    type: REQUEST_PETS
  };
};

export const RECEIVE_PETS_SUCCESS = 'RECEIVE_PETS_SUCCESS';
const receivePetsSuccess = (json) => {
  return {
    type: RECEIVE_PETS_SUCCESS,
    pets: json.map(child => child),
    receivedAt: Date.now()
  };
};

export const RECEIVE_PETS_ERROR = 'RECEIVE_PETS_ERROR';
const receivePetsError = (error) => {
  return {
    type: RECEIVE_PETS_ERROR,
    errorMessage: error,
    receivedAt: Date.now()
  };
};

export const fetchPets = () => {
  return dispatch => {
    dispatch(requestPets());
    // Basic API, that returns id and name
    // [{ id: 1, name: 'fluffy'},{ id: 2, name: 'muffy'}]
    return fetch('http://localhost:2403/pets', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => dispatch(receivePetsSuccess(json)))
      .catch(error => dispatch(receivePetsError(error)));
  };
};
