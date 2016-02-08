import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import App from '../components/App';
import Home from '../components/Pages/Home';
import ChartPage from '../components/Pages/ChartPage';
import TablePage from '../components/Pages/TablePage';
import MapPage from '../components/Pages/MapPage';
import AboutPage from '../components/Pages/AboutPage';
import Signup from '../components/Pages/Signup';
import Signin from '../components/Pages/Signin';
import useScroll from 'scroll-behavior/lib/useStandardScroll';

const history = useScroll(createHashHistory);
const appHistory = useRouterHistory(history)({ queryKey: false });

export const Routes = () => {
  return (
    <Router history={appHistory}>
      <Route path='/' components={App} >
        <IndexRoute component={Home} />
        <Route path='home' component={Home} />
        <Route path='chart' component={ChartPage} />
        <Route path='table' component={TablePage} />
        <Route path='map' component={MapPage} />
        <Route path='about' component={AboutPage} />
        <Route path='signup' component={Signup} />
        <Route path='signin' component={Signin} />
      </Route>
    </Router>
  );
};

export default Routes;
