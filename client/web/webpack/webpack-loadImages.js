module.exports = ({ include, exclude, options } = {}) => ({
    module: {
        rules: [
            {
                test: /\.(png|jpg|svg)$/,
                include,
                exclude,
                use: {
                    loader: 'url-loader',
                    options
                }
            },
            {
                test: /\.(png|jpg|svg)$/,
                include,
                exclude,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[hash].[ext]'
                    }
                }
            }
        ]
    }
});
