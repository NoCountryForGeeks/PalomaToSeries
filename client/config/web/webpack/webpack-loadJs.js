module.exports = ({ include, exclude, plugins }) => ({
    module: {
        rules: [
            {
                test: /\.js$/,
                include,
                exclude,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    plugins
                }
            }
        ]
    }
});
