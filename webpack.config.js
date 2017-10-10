'use strict';
// You can use this with angular.
//var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
   context: __dirname + '/app',
   entry: './main.js',
   output: {
      path: __dirname + '/src/main/webapp',
      filename: 'bundle.js'
   },
   module: {
      preLoaders: [
         {test: /\.js$/, exclude: /node_modules/, loader: 'jshint-loader'}
      ],
      loaders: [
         // **IMPORTANT** This is needed so that each bootstrap js file required by
         // bootstrap-webpack has access to the jQuery object
         { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

         {test: /[\/]angular\.js$/, loader: "exports?window.angular"},
         {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}, // use ! to chain loaders
         {test: /\.css$/, loader: 'style-loader!css-loader'},

         // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
         // loads bootstrap's css.
         { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
         { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
         { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
         { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
      ]
   },
   jshint: {
      failOnHint: true
   },
   plugins: [
      
   ]
};