import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR, LOCALSTORAGE_TOKEN_KEY } from '../constants/auth';
import { SERVER_URI } from '../constants/uri';
import fetch from 'isomorphic-fetch';
import { setValue } from '../services/storage';
import { hashHistory } from 'react-router';

export const signupRequest = () => {
  return {
    type: SIGNUP_REQUEST
  };
};

export const signupResponse = (data) => {
  if(data.error)
    return {
      type: SIGNUP_ERROR,
      error: data.error
    };

  setValue(LOCALSTORAGE_TOKEN_KEY, data.token);

  hashHistory.replace('home');

  return {
    type: SIGNUP_SUCCESS,
    username: data.username
  };
};

export const signupError = (error) => {
  return {
    type: SIGNUP_ERROR,
    error
  };
};

export const signup = (user) => {
  return dispatch => {
    dispatch(signupRequest);
    return fetch(`${SERVER_URI}/auth/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password
      })
    })
    .then(response => response.json())
    .then(data => dispatch(signupResponse(data)))
    .catch(error => dispatch(signupError(error)));
  };
};
