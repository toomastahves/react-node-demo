import { CREATE_PET_REQUEST, CREATE_PET_SUCCESS, CREATE_PET_ERROR } from '../constants/pets';
import { RESET_PET_FORM } from '../constants/validate';
import { SERVER_URI } from '../constants/uri';
import { LOCALSTORAGE_TOKEN_KEY } from '../constants/auth';
import fetch from 'isomorphic-fetch';
import { getValue } from '../services/storage';
import { hashHistory } from 'react-router';

export const resetPetForm = () => {
  return {
    type: RESET_PET_FORM
  };
};

export const createPetSuccess = (pet) => {
  hashHistory.replace('table');
  return {
    type: CREATE_PET_SUCCESS,
    pet
  };
};

export const createPetError = (error) => {
  return {
    type: CREATE_PET_ERROR,
    error
  };
};

export const createPetRequest = () => {
  return {
    type: CREATE_PET_REQUEST
  };
};

export const createPet = (pet) => {
  const token = getValue(LOCALSTORAGE_TOKEN_KEY);
  return dispatch => {
    dispatch(createPetRequest());
    return fetch(`${SERVER_URI}/api/pets`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': token
      },
      body: JSON.stringify(pet)
    })
    .then(response => response.json())
    .then(savedPet => dispatch(createPetSuccess(savedPet)))
    .catch(error => dispatch(createPetError(error)));
  };
};
