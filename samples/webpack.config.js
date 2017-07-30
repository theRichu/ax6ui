const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let entry = {
  index: './src/index.js',
  mask: './src/mask.js',
  formatter: './src/formatter.js',
  calendar: './src/calendar.js',
  picker: './src/picker.js',
  palette: './src/palette.js',
  dialog: './src/dialog.js',
  toast: './src/toast.js',
  select: './src/select.js',
  menu: './src/menu.js',
  grid: './src/grid.js',
  modal: './src/modal.js',
  uploader: './src/uploader.js',
};

let plugins = [
  //new CleanWebpackPlugin(['dist']),
  //new webpack.HotModuleReplacementPlugin()
];

let menu = [];

for (let k in entry) {
  menu.push(k + '.html');
}

for (let k in entry) {
  let obj = {
    inject: false,
    chunks: [k],
    menu: menu,
    title: "AX6UI SAMPLE (" + k + ")",
    filename: k + '.html',
    template: './src/assets/sample.ejs'
  };
  plugins.push(new HtmlWebpackPlugin(obj));
}

webpack.logLevel = 'NONE';

// module.exports
module.exports = {
  entry: entry,
  plugins: plugins,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 4000
  },
  devtool: 'inline-source-map',
  node: {
    fs: 'empty',
    child_process: 'empty'
  },
  module: {
    rules: [
      {test: /\.css$/, use: 'css-loader'},
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
};