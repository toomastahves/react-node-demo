import * as actions from '../constants/user';

const initialState = {
  fetching: false,
  available: {},
  error: ''
};

export const userReducer = (state = initialState, action) => {
  switch(action.type) {

    case actions.CHECK_USERNAME_AVAILABILITY_REQUEST:
      return Object.assign({}, state, { fetching: true, error: '' });
    case actions.CHECK_USERNAME_AVAILABILITY_SUCCESS:
      return Object.assign({}, state, { fetching: false, error: '', available: action.available });
    case actions.CHECK_USERNAME_AVAILABILITY_ERROR:
      return Object.assign({}, state, { fetching: false, error: action.error });

    default:
      return state;
  }
};
