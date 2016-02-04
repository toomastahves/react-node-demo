import express from 'express';
import favicon from 'serve-favicon';
import { applyMiddleware } from './applyMiddleware';

const mainApp = express();

applyMiddleware(mainApp);

mainApp.use(express.static('public'));
mainApp.use(favicon('public/favicon.ico'));

export default mainApp;
