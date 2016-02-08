import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { petReducer } from './pets';

const reducers = combineReducers({
  authReducer,
  petReducer
});

export default reducers;
