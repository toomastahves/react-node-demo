import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { petReducer } from './pets';
import { userReducer } from './user';

const reducers = combineReducers({
  authReducer,
  petReducer,
  userReducer
});

export default reducers;
