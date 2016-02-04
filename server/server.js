import { startWebpackDevServer } from './webpack/devServer';
import mainApp from './express/mainApp';

const port = process.env.PORT || 3000;
mainApp.listen(port, () => {
  console.log(`Express mainApp started at ${port}`);
});

if(process.env.NODE_ENV !== 'production') {
  startWebpackDevServer();
}
