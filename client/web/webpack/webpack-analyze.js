const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = configuration => ({
    plugins: [
        new BundleAnalyzerPlugin(configuration)
    ]
});
