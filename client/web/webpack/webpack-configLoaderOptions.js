const webpack = require('webpack');

module.exports = options => ({
    plugins: [
        new webpack.LoaderOptionsPlugin({ options })
    ],
});
