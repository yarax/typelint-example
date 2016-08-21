const webpack = require("webpack");
const config = require('../../webpack.config');
const express = require('express');
const app = express();
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const compiler = webpack(config);
process.env.NODE_ENV = 'development';

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  watchOptions: {
    poll: false,
  },
  publicPath: config.output.publicPath,
  stats: {
    warnings: false,
  }
}));

app.use(express.static(path.join(__dirname, '..', '..', 'public')));
app.use(express.static(path.join(__dirname, '..', '..', 'public/dist')));

app.get('/pet/findByStatus', (req, res) => {
  res.json([
    {id: 345, name: 'Bobby', price: 100, category: {id: 1, name: 'dog'}, status: 'available', },
    {id: 346, name: 'Willy', price: 40, category: {id: 2, name: 'hamster'}, status: 'available', },
    {id: 347, name: 'Matroskin', price: 80, category: {id: 3, name: 'cat'}, status: 'available', },
    {id: 348, name: 'Pogo', price: 110, category: {id: 4, name: 'raccoon'}, status: 'available', },
  ]);
});

app.listen(3000, 'localhost', () => {
  console.log('http://localhost:3000/');
});