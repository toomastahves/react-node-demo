import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import App from '../components/App';
import Home from '../components/Pages/Home';
import Chart from '../components/Pages/Content/Chart';
import Table from '../components/Pages/Content/Table';
import Map from '../components/Pages/Content/Map';
import About from '../components/Pages/Content/About';
import Signup from '../components/Pages/Auth/Signup';
import Signin from '../components/Pages/Auth/Signin';
import useScroll from 'scroll-behavior/lib/useStandardScroll';

const history = useScroll(createHashHistory);
const appHistory = useRouterHistory(history)({ queryKey: false });

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
        <Route path='signup' component={Signup} />
        <Route path='signin' component={Signin} />
      </Route>
    </Router>
  );
};

export default Routes;
