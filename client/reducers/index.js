import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { petReducer } from './pets';
import { validateReducer } from './validate';

const reducers = combineReducers({
  authReducer,
  petReducer,
  validateReducer
});

export default reducers;
