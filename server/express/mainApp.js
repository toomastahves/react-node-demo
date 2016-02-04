import express from 'express';
import favicon from 'serve-favicon';
import { applyMiddleware } from './applyMiddleware';
import routes from '../routes/main';
import { connectToCacheDatabase } from '../databases/cacheDb';

const mainApp = express();

connectToCacheDatabase();

applyMiddleware(mainApp);

routes(mainApp);

mainApp.use(express.static('public'));
mainApp.use(favicon('public/favicon.ico'));

export default mainApp;
