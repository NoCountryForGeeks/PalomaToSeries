const merge = require('webpack-merge');
const path = require('path');
const glob = require('glob');

const { lintJs, devServer, loadCss, extractCss, autoprefixing, purifyCss,
    lintCss, loadImages, loadFonts, loadJs, generateSourceMaps,
    optimizeBundle, clean, fileRevision, minifyJs, setEnvironmentVariable,
    analyze, scopeHoisting, hotModuleReplacement,
    useHtmlTemplate, configLoaderOptions, performanceOptions,
    useHashedModuleIds, useExternalScripts, svgSpriteLoader} = require('./webpack');

const PATHS = {
    mobileFolder: path.join(__dirname, '../../app/mobile'),
    stateFolder: path.join(__dirname, '../../app/state'),
    servicesFolder: path.join(__dirname, '../../app/services'),
    appFolder: path.join(__dirname, '../../app/web'),
    outputFolder: path.join(__dirname, '../../build/web'),
    node_modules: path.join(__dirname, '../../node_modules'),
    indexTemplate: __dirname + '/../../app/web/index.tmpl.html',
    recordsFolder: path.join(__dirname, '../../records/web/records.json'),
    reportsFolder: path.join(__dirname, '../../reports/web'),
    imageFolder: path.join(__dirname, '../../app/content/images')
};

const initialConfig = {
    common: {
        entry: {
            app: [
                'webpack-dev-server/client?http://localhost:8080',
                'webpack/hot/only-dev-server',
                'react-hot-loader/patch',
                PATHS.appFolder
            ]
        },
        output: {
            path: PATHS.outputFolder,
            publicPath: '/',
            filename: '[name].[hash].js'
        },
        plugins: [],
    },
    production: {
        entry: {
            app:PATHS.appFolder
        },
        output: {
            chunkFilename: '[name].[chunkhash:8].js',
            filename: '[name].[chunkhash:8].js'
        },
        plugins: [],
        recordsPath: PATHS.recordsFolder,
    },
    development: {
        output: {
            devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
        }
    }
}

const commonConfiguration = merge([
    initialConfig.common,
    configLoaderOptions({
        eslint: {
            failOnWarning: true,
            failOnError: true,
            fix: false
        }
    }),
    useExternalScripts(/\.exec\.js$/),
    useHtmlTemplate({
        template: PATHS.indexTemplate,
        hash: true,
        title: 'Series'}),
    lintJs({ exclude: [ PATHS.node_modules, PATHS.mobileFolder ]  }),
    lintCss({ exclude: [ PATHS.node_modules, PATHS.mobileFolder ]  }),
    loadJs({ exclude: [ PATHS.node_modules, PATHS.mobileFolder ], plugins: ['transform-class-properties','transform-runtime'] }),
    svgSpriteLoader({ spriteFilename: './content/svg/sprite.svg' }),
    loadFonts({
        options: {
            name: '[name].[hash:8].[ext]',
        }
    })
]);

const productionConfiguration = merge([
    initialConfig.production,
    clean([PATHS.outputFolder, PATHS.reportsFolder]),
    setEnvironmentVariable('process.env.NODE_ENV', 'production' ),
    optimizeBundle([
        {
            name: 'vendor',
            minChunks: ({ resource }) =>
            ( resource &&
                resource.indexOf('node_modules') >= 0 &&
                resource.match(/\.js$/)
            )
        },
        {
            name: 'manifest',
            minChunks: Infinity
        }
    ]),
    extractCss({ use: [
        {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
                modules: true,
                localIdentName: 'purify_[hash:base64:5]'
            }
        },
        autoprefixing(),
        'sass-loader'
    ]}),
    purifyCss({ paths: glob.sync(`${PATHS.appFolder}/**/*.js`) }),
    loadImages({
        options: {
            limit: 15000,
            name: '[name].[hash:8].[ext]',
            outputPath: 'content/images/'
        },
        include:  PATHS.appFolder
    }),
    generateSourceMaps({ type: 'source-map' }),
    fileRevision(),
    performanceOptions({
        hints: 'warning',
        maxEntrypointSize: 100000,
        maxAssetSize: 450000

    }),
    minifyJs(),
    scopeHoisting(),
    useHashedModuleIds(),
    analyze({
        analyzerMode: 'static',
        reportFilename: `${PATHS.reportsFolder}/report.html`,
        openAnalyzer: false,
        generateStatsFile: true,
        statsFilename: `${PATHS.reportsFolder}/stats.json`,
    })
]);

const developmentConfiguration = merge([
    initialConfig.development,
    devServer({ host: process.env.HOST, port: process.env.PORT, open: true }),
    loadCss(),
    loadImages({ include: PATHS.imageFolder }),
    generateSourceMaps({ type: 'cheap-module-source-map' }),
    hotModuleReplacement(),
]);

module.exports = env => {
    if (env === 'production'){
        return merge(commonConfiguration, productionConfiguration);
    }
    return merge(commonConfiguration, developmentConfiguration);
};
