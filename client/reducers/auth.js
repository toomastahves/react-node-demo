import * as actions from '../constants/auth';

const initialState = {
  fetching: false,
  username: '',
  _id: '',
  error: ''
};

export const authReducer = (state = initialState, action) => {
  switch(action.type) {

    case actions.SIGNUP_REQUEST:
      return Object.assign({}, state, { fetching: true, error: '' });
    case actions.SIGNUP_SUCCESS:
      return Object.assign({}, state, { fetching: false, error: '', username: action.username, _id: action._id });
    case actions.SIGNUP_ERROR:
      return Object.assign({}, state, { fetching: false, error: action.error });

    case actions.SIGNIN_REQUEST:
      return Object.assign({}, state, { fetching: true, error: '' });
    case actions.SIGNIN_SUCCESS:
      return Object.assign({}, state, { fetching: false, error: '', username: action.username, _id: action._id });
    case actions.SIGNIN_ERROR:
      return Object.assign({}, state, { fetching: false, error: action.error });

    case actions.SIGNOUT_SUCCESS:
      return Object.assign({}, state, { username: '', _id: '' });

    default:
      return state;
  }
};
