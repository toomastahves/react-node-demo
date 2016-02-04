import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import App from '../components/App';
import Home from '../components/Pages/Home';
import Chart from '../components/Pages/Chart';
import Table from '../components/Pages/Table';
import Map from '../components/Pages/Map';
import About from '../components/Pages/About';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

export const Routes = () => {
  return (
    <Router history={appHistory}>
      <Route path='/' components={App} >
        <IndexRoute component={Home} />
        <Route path='home' component={Home} />
        <Route path='chart' component={Chart} />
        <Route path='table' component={Table} />
        <Route path='map' component={Map} />
        <Route path='about' component={About} />
      </Route>
    </Router>
  );
};

export default Routes;
