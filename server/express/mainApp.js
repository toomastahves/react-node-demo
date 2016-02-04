import express from 'express';
import favicon from 'serve-favicon';
import { applyMiddleware } from './applyMiddleware';

const mainApp = express();

mainApp.use(express.static('public'));
mainApp.use(favicon('public/favicon.ico'));

applyMiddleware(mainApp);

export default mainApp;
