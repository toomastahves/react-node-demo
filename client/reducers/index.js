import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import petReducers from './petReducers';
import dataReducers from './dataReducers';

const reducers = combineReducers({
  routeReducer,
  petReducers,
  dataReducers
});

export default reducers;
