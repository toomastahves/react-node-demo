import { startWebpackDevServer } from './webpack/devServer';

import express from 'express';
const app = express();
app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express mainApp started at ${port}`);
});

if(process.env.NODE_ENV !== 'production') {
  // startWebpackDevServer();
}
