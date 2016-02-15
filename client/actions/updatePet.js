import { UPDATE_PET_REQUEST, UPDATE_PET_SUCCESS, UPDATE_PET_ERROR } from '../constants/pets';
import { SERVER_URI } from '../constants/uri';
import { LOCALSTORAGE_TOKEN_KEY } from '../constants/auth';
import fetch from 'isomorphic-fetch';
import { getValue } from '../services/storage';
import { hashHistory } from 'react-router';

export const updatePetRequest = () => {
  return {
    type: UPDATE_PET_REQUEST
  };
};

export const updatePetSuccess = (pet) => {
  hashHistory.replace('table');
  return {
    type: UPDATE_PET_SUCCESS,
    pet
  };
};

export const updatePetError = (error) => {
  return {
    type: UPDATE_PET_ERROR,
    error
  };
};

export const updatePet = (pet) => {
  const token = getValue(LOCALSTORAGE_TOKEN_KEY);
  return dispatch => {
    dispatch(updatePetRequest());
    return fetch(`${SERVER_URI}/api/pets`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': token
      },
      body: JSON.stringify(pet)
    })
    .then(response => response.json())
    .then(updatedPet => dispatch(updatePetSuccess(updatedPet)))
    .catch(error => dispatch(updatePetError(error)));
  };
};
