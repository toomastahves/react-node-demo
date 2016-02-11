import express from 'express';
import favicon from 'serve-favicon';
import { applyMiddleware } from './applyMiddleware';
import routes from '../routes/';
import { connectToMainDatabase } from '../databases/mainDb';

const mainApp = express();

connectToMainDatabase();

applyMiddleware(mainApp);

routes(mainApp);

mainApp.use(express.static('public'));
mainApp.use(favicon('public/favicon.ico'));

mainApp.use((err, req, res, next) => {
  if (res.headersSent) {
    console.log(err);
    return next(err);
  }
  console.error(err.stack);
  res.status(500).send({ error: err.message });
});

export default mainApp;
