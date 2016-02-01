import { PETS_REQUEST, PETS_SUCCESS, PETS_ERROR } from '../constants/petConstants';
import { API_URI } from '../constants/uriConstants';
import fetch from 'isomorphic-fetch';

export const petsRequest = () => {
  return {
    type: PETS_REQUEST
  };
};

export const petsSuccess = (data) => {
  return { type: PETS_SUCCESS, pets: data };
};

export const petsError = (error) => {
  return { type: PETS_ERROR, error };
};

export const getPets = () => {
  return dispatch => {
    dispatch(petsRequest());
    return fetch(`${API_URI}/api/pets`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => dispatch(petsSuccess(data)))
    .catch(error => dispatch(petsError(error)));
  };
};
