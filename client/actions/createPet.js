import { CREATE_PET_REQUEST, CREATE_PET_SUCCESS, CREATE_PET_ERROR } from '../constants/pets';
import { RESET_PET_FORM } from '../constants/validate';
import { SERVER_URI } from '../constants/uri';
import { LOCALSTORAGE_TOKEN_KEY } from '../constants/auth';
import fetch from 'isomorphic-fetch';
import { getValue } from '../services/storage';

export const createPetSuccess = (pet) => {
  return {
    type: CREATE_PET_SUCCESS,
    pet
  };
};

export const resetPetForm = () => {
  document.getElementById('petname').value = '';
  document.getElementById('species').value = '';
  document.getElementById('homestatus').value = '0';
  document.getElementById('lat').value = '';
  document.getElementById('lng').value = '';
  return {
    type: RESET_PET_FORM
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
    .then(dispatch(resetPetForm()))
    .catch(error => dispatch(createPetError(error)));
  };
};
