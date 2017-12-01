module.exports = files => ({
    module: {
        rules: {
            test: files,
            use: [ 'script-loader' ]
        }
    }
});
