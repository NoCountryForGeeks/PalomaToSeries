const webpack = require ('webpack');
const GitRevisionPlugin = require('git-revision-webpack-plugin');

module.exports = () => ({
    plugins: [
        new webpack.BannerPlugin({ banner: new GitRevisionPlugin().version() })
    ]
});
