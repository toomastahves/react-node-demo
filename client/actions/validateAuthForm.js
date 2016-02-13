import {
  CHECK_USERNAME_AVAILABILITY_REQUEST,
  CHECK_USERNAME_AVAILABILITY_SUCCESS,
  CHECK_USERNAME_AVAILABILITY_ERROR,
  VALIDATE_USERNAME_SUCCESS,
  VALIDATE_USERNAME_ERROR,
  VALIDATE_PASSWORD_SUCCESS,
  VALIDATE_PASSWORD_ERROR
} from '../constants/validate';
import { SERVER_URI } from '../constants/uri';
import fetch from 'isomorphic-fetch';
import { signup } from './signup';
import { signin } from './signin';

export const checkUsernameAvailabilitySuccess = (available) => {
  return {
    type: CHECK_USERNAME_AVAILABILITY_SUCCESS,
    available
  };
};

export const checkUsernameAvailabilityError = (error) => {
  return {
    type: CHECK_USERNAME_AVAILABILITY_ERROR,
    error
  };
};

export const checkUsernameAvailabilityRequest = () => {
  return {
    type: CHECK_USERNAME_AVAILABILITY_REQUEST
  };
};

export const checkUsernameAvailability = (name) => {
  const username = { username: name };
  return dispatch => {
    dispatch(checkUsernameAvailabilityRequest());
    return fetch(`${SERVER_URI}/auth/checkusername`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(username)
    })
    .then(response => response.json())
    .then(available => dispatch(checkUsernameAvailabilitySuccess(available)))
    .catch(error => dispatch(checkUsernameAvailabilityError(error)));
  };
};

let debounce = null;

export const validateUsername = (username) => {
  if(username.length < 3) {
    return {
      type: VALIDATE_USERNAME_ERROR,
      error: 'Username too short'
    };
  }
  return dispatch => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      dispatch({
        type: VALIDATE_USERNAME_SUCCESS
      });
      dispatch(checkUsernameAvailability(username));
    }, 1000);
  };
};

export const validatePassword = (password) => {
  if(password.length < 3) {
    return {
      type: VALIDATE_PASSWORD_ERROR,
      error: 'Password too short'
    };
  }
  return {
    type: VALIDATE_PASSWORD_SUCCESS
  };
};

export const validateAndSubmit = (username, password, type) => {
  return dispatch => {
    if(username.length < 3) {
      dispatch({
        type: VALIDATE_USERNAME_ERROR,
        error: 'Username too short'
      });
    }
    if(password.length < 3) {
      dispatch({
        type: VALIDATE_PASSWORD_ERROR,
        error: 'Password too short'
      });
    } else {
      if(type === 'signup')
        dispatch(signup({ username, password }));
      if(type === 'signin')
        dispatch(signin({ username, password }));
    }
  };
};
