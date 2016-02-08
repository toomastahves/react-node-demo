import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/';
import thunkMiddleware from 'redux-thunk';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
