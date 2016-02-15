import { GET_PET_REQUEST, GET_PET_ERROR } from '../constants/pets';
import { INIT_PET_FORM } from '../constants/validate';
import { SERVER_URI } from '../constants/uri';
import fetch from 'isomorphic-fetch';

export const initPetForm = (pet) => {
  return {
    type: INIT_PET_FORM,
    petForm: pet
  };
};

export const getPetError = (error) => {
  return {
    type: GET_PET_ERROR,
    error
  };
};

export const getPetRequest = () => {
  return {
    type: GET_PET_REQUEST
  };
};

export const getPet = (_id) => {
  return dispatch => {
    dispatch(getPetRequest());
    return fetch(`${SERVER_URI}/api/pets/${_id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(petForm => dispatch(initPetForm(petForm)))
    .catch(error => dispatch(getPetError(error)));
  };
};
