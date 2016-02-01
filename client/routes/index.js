import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import App from '../components/App';
import Home from '../components/pages/Home';
import Table from '../components/pages/Table';
import Line from '../components/pages/Line';
import Map from '../components/pages/Map';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

export const Routes = () => {
  return (
    <Router history={appHistory}>
      <Route path='/' components={App} >
        <IndexRoute component={Home} />
        <Route path='home' component={Home} />
        <Route path='table' component={Table} />
        <Route path='line' component={Line} />
        <Route path='map' component={Map} />
      </Route>
    </Router>
  );
};

export default Routes;
