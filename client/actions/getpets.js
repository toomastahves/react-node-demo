import { GET_PETS_REQUEST, GET_PETS_SUCCESS, GET_PETS_ERROR } from '../constants/pets';
import { SERVER_URI } from '../constants/uri';
import fetch from 'isomorphic-fetch';

export const getPetsSuccess = (pets) => {
  return {
    type: GET_PETS_SUCCESS,
    pets
  };
};

export const getPetsError = (error) => {
  return {
    type: GET_PETS_ERROR,
    error
  };
};

export const getPetsRequest = () => {
  return {
    type: GET_PETS_REQUEST
  };
};

export const getPets = () => {
  return dispatch => {
    dispatch(getPetsRequest());
    return fetch(`${SERVER_URI}/api/pets`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(pets => dispatch(getPetsSuccess(pets)))
    .catch(error => dispatch(getPetsError(error)));
  };
};
