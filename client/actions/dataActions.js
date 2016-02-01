import { DATA_REQUEST, DATA_SUCCESS, DATA_ERROR } from '../constants/dataConstants';
import { API_URI } from '../constants/uriConstants';
import fetch from 'isomorphic-fetch';

export const dataRequest = () => {
  return {
    type: DATA_REQUEST
  };
};

export const dataSuccess = (data) => {
  return { type: DATA_SUCCESS, data };
};

export const dataError = (error) => {
  return { type: DATA_ERROR, error };
};

export const getData = () => {
  return dispatch => {
    dispatch(dataRequest());
    return fetch(`${API_URI}/api/data`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => dispatch(dataSuccess(data)))
    .catch(error => dispatch(dataError(error)));
  };
};
