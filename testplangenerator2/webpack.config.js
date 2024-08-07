const path = require('path');
const webpack = require('webpack');

module.exports = {
    // שאר ההגדרות שלך
    resolve: {
        fallback: {
            "fs": false,
            "util": require.resolve("util/"),
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "url": require.resolve("url/"),
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "url": require.resolve("url/"),
            "process": require.resolve("process/browser"),
            "path": require.resolve("path-browserify"),
            "fs": false,
            "http": false,
            "https": false,
            "url": false
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    ],
    // שאר ההגדרות שלך
};


const path = require('path');

module.exports = {
  // שאר ההגדרות שלך
  resolve: {
    fallback: {
     
    }
  }
};
