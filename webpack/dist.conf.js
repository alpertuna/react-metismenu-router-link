/**
 * dist.conf.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 18.08.2016
 */

const config = require('./base.conf');

// Webpack Production Settings
module.exports = Object.assign(config, {
  entry: './src/RouterLink.jsx',
  output: {
    path: 'dist',
    filename: 'react-metismenu-router-link.js',
    library: 'ReactMetismenuRouterLink',
    libraryTarget: 'umd',
  },
  externals: [
    {
      react: true,
    },
  ],
});
