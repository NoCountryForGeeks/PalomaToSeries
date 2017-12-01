const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ template, hash, title }) => ({
    plugins: [
        new HtmlWebpackPlugin({template, hash, title})
    ],
});
