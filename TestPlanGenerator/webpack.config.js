const path = require('path');

module.exports = {
    resolve: {
        fallback: {
            "util": require.resolve("util/"),
            // הוסף פוליפילים נוספים במידת הצורך
        },
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            },
        }, ],
    },
};