import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/';
import thunkMiddleware from 'redux-thunk';
import { syncHistory } from 'react-router-redux';
import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const reduxRouterMiddleware = syncHistory(appHistory);

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, reduxRouterMiddleware)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
