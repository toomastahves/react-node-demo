import { DELETE_PET_REQUEST, DELETE_PET_SUCCESS, DELETE_PET_ERROR } from '../constants/pets';
import { SERVER_URI } from '../constants/uri';
import { LOCALSTORAGE_TOKEN_KEY } from '../constants/auth';
import fetch from 'isomorphic-fetch';
import { getValue } from '../services/storage';

export const deletePetRequest = () => {
  return {
    type: DELETE_PET_REQUEST
  };
};

export const deletePetSuccess = (_id) => {
  return {
    type: DELETE_PET_SUCCESS,
    _id
  };
};

export const deletePetError = (error) => {
  return {
    type: DELETE_PET_ERROR,
    error
  };
};

export const deletePet = (_id) => {
  console.log('called');
  const token = getValue(LOCALSTORAGE_TOKEN_KEY);
  return dispatch => {
    dispatch(deletePetRequest());
    return fetch(`${SERVER_URI}/api/pets`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': token
      },
      body: JSON.stringify({
        _id
      })
    })
    .then(response => response.json())
    .then(dispatch(deletePetSuccess(_id)))
    .catch(error => dispatch(deletePetError(error)));
  };
};
