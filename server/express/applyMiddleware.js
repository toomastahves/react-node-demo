import bodyParser from 'body-parser';
import logger from 'morgan';
import responseTime from 'response-time';
import compression from 'compression';
import helmet from 'helmet';

export const applyMiddleware = (app) => {
  app.use(logger('dev'));
  app.use(responseTime());
  app.use(compression());
  app.use(helmet());
  app.use(helmet.hidePoweredBy({ setTo: 'Fantasy Unicorns' }));
  app.use(bodyParser.json());

  if(process.env.NODE_ENV !== 'production') {
    app.use(helmet.frameguard('allow-from', `*`));
  }

};
