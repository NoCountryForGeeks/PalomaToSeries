module.exports = ({ host, port, open } = {}) => ({
    devServer: {
        historyApiFallback: true,
        stats: 'errors-only',
        host,
        port,
        open,
        overlay: {
            errors: true,
            warnings: true,
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
});
