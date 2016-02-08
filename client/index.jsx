import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes/';
import store from './store/';
import 'purecss/build/pure-min.css';
import 'purecss/build/grids-responsive-min.css';
import 'font-awesome/css/font-awesome.min.css';
import './global.css';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

import { signinJWT } from './actions/signin';
store.dispatch(signinJWT());
