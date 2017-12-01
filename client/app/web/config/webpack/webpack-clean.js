const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = directoryPath => ({
    plugins: [
        new CleanWebpackPlugin(
            [...directoryPath],
            { root: path.resolve(__dirname , '/') }
        )
    ]
});
