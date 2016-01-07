import thunkMiddleware from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import petReducer from '../reducers/petReducers';
const appReducers = combineReducers({petReducer});

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(appReducers);

export default store;
