import { CHECK_USERNAME_AVAILABILITY_REQUEST, CHECK_USERNAME_AVAILABILITY_SUCCESS, CHECK_USERNAME_AVAILABILITY_ERROR } from '../constants/user';
import { SERVER_URI } from '../constants/uri';
import fetch from 'isomorphic-fetch';

export const checkUsernameSuccess = (available) => {
  return {
    type: CHECK_USERNAME_AVAILABILITY_SUCCESS,
    available
  };
};

export const checkUsernameError = (error) => {
  return {
    type: CHECK_USERNAME_AVAILABILITY_ERROR,
    error
  };
};

export const checkUsernameRequest = () => {
  return {
    type: CHECK_USERNAME_AVAILABILITY_REQUEST
  };
};

export const checkUsernameAvailability = (name) => {
  const username = { username: name };
  return dispatch => {
    dispatch(checkUsernameRequest());
    return fetch(`${SERVER_URI}/auth/checkusername`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(username)
    })
    .then(response => response.json())
    .then(available => dispatch(checkUsernameSuccess(available)))
    .catch(error => dispatch(checkUsernameError(error)));
  };
};
