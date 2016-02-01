import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

import favicon from 'serve-favicon';
import { connectToDatabase } from '../db/connection';
import routes from '../routes/';

const app = express();

connectToDatabase();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(logger('dev'));
routes(app);

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(favicon('public/favicon.ico'));

export default app;
