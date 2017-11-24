module.exports = ({ host, port, open } = {}) => ({
    devServer: {
        historyApiFallback: true,
        stats: 'errors-only',
        open,
        host,
        port,
        overlay: {
            errors: true,
            warnings: true,
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
});
