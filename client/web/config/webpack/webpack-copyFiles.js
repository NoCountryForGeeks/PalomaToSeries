const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = processes => ({
    plugins: [
        new CopyWebpackPlugin(processes)
    ]
});
