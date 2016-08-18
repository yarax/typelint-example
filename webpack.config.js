module.exports = {
  entry: __dirname + "/src/client",
  cache: true,
  watch: true,
  devtool: "eval",
  output: {
    path: __dirname + "/public/dist",
    filename: "index.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  }
};