import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import App from '../components/App';
import HomePage from '../components/Pages/HomePage';
import ChartPage from '../components/Pages/ChartPage';
import TablePage from '../components/Pages/TablePage';
import MapPage from '../components/Pages/MapPage';
import AboutPage from '../components/Pages/AboutPage';
import SignupPage from '../components/Pages/SignupPage';
import SigninPage from '../components/Pages/SigninPage';
import useScroll from 'scroll-behavior/lib/useStandardScroll';

const history = useScroll(createHashHistory);
const appHistory = useRouterHistory(history)({ queryKey: false });

export const Routes = () => {
  return (
    <Router history={appHistory}>
      <Route path='/' components={App} >
        <IndexRoute component={HomePage} />
        <Route path='home' component={HomePage} />
        <Route path='chart' component={ChartPage} />
        <Route path='table' component={TablePage} />
        <Route path='map' component={MapPage} />
        <Route path='about' component={AboutPage} />
        <Route path='signup' component={SignupPage} />
        <Route path='signin' component={SigninPage} />
      </Route>
    </Router>
  );
};

export default Routes;
