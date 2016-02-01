import app from './express/app';
import webpackDevServer from './webpack/devServer';

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express started at ${port}`);
});

if(process.env.NODE_ENV !== 'production') {
  webpackDevServer();
}
