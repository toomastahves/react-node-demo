import {REQUEST_PETS, RECEIVE_PETS_SUCCESS, RECEIVE_PETS_ERROR} from '../actions/petActions';

const initialState = {
  isFetching: false,
  isError: false,
  errorMessage: '',
  pets: []
};

const petReducer = (state = initialState, action) => {
  let newState = {};

  switch(action.type) {

    case REQUEST_PETS:
      console.log('REQUEST_PETS');
      return Object.assign({}, state, {
        isFetching: true
      });

    case RECEIVE_PETS_SUCCESS:
      console.log('RECEIVE_PETS_SUCCESS');
      return Object.assign({}, state, {
        isFetching: false,
        isError: false,
        pets: action.pets,
        lastUpdate: action.receivedAt
      });

    case RECEIVE_PETS_ERROR:
      console.log('RECEIVE_PETS_ERROR');
      return Object.assign({}, state, {
        isFetching: false,
        isError: true,
        errorMessage: action.errorMessage,
        lastUpdate: action.receivedAt
      });

    default:
      return state;
  }
};

export default petReducer;
