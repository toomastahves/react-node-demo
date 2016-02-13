import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_ERROR, LOCALSTORAGE_TOKEN_KEY } from '../constants/auth';
import { SERVER_URI } from '../constants/uri';
import fetch from 'isomorphic-fetch';
import { setValue, getValue } from '../services/storage';
import { hashHistory } from 'react-router';

export const signinRequest = () => {
  return {
    type: SIGNIN_REQUEST
  };
};

export const signinResponse = (data) => {
  if(data.error)
    return {
      type: SIGNIN_ERROR,
      error: data.error
    };

  setValue(LOCALSTORAGE_TOKEN_KEY, data.token);

  hashHistory.replace('profile');

  return {
    type: SIGNIN_SUCCESS,
    username: data.username
  };
};

export const signinError = (error) => {
  console.log('error', error);
  return {
    type: SIGNIN_ERROR,
    error
  };
};

export const signin = (user) => {
  return dispatch => {
    dispatch(signinRequest);
    return fetch(`${SERVER_URI}/auth/signin`, {
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
    .then(data => dispatch(signinResponse(data)))
    .catch(error => dispatch(signinError(error)));
  };
};

export const signinJWT = () => {
  const token = getValue(LOCALSTORAGE_TOKEN_KEY);
  if(!token) return dispatch => {};

  return dispatch => {
    dispatch(signinRequest());
    return fetch(`${SERVER_URI}/auth/signinjwt`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': token
      }
    })
    .then(response => response.json())
    .then(data => dispatch(signinResponse(data)))
    .catch(error => dispatch(signinError(error)));
  };
};
