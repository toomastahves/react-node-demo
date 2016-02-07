import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/';
import thunkMiddleware from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
