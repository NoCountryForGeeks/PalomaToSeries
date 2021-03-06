module.exports = {
    lintJs: require('./webpack-lintJs'),
    devServer:  require('./webpack-devServer'),
    loadCss: require('./webpack-loadCss'),
    extractCss: require('./webpack-extractCss'),
    autoprefixing: require ('./webpack-autoprefixing'),
    purifyCss: require('./webpack-purifyCss'),
    lintCss: require('./webpack-lintCss'),
    loadImages: require ('./webpack-loadImages'),
    loadFonts: require('./webpack-loadFonts'),
    loadJs: require('./webpack-loadJs'),
    generateSourceMaps: require('./webpack-generateSourceMaps'),
    optimizeBundle: require('./webpack-optimizeBundle'),
    clean: require('./webpack-clean'),
    fileRevision: require('./webpack-fileRevision'),
    minifyJs: require('./webpack-minifyJs'),
    setEnvironmentVariable: require('./webpack-setEnvironmentVariable'),
    analyze: require('./webpack-analyze'),
    scopeHoisting: require('./webpack-scopeHoisting'),
    hotModuleReplacement: require('./webpack-hotModuleReplacement'),
    useHtmlTemplate: require('./webpack-useHtmlTemplate'),
    configLoaderOptions: require('./webpack-configLoaderOptions'),
    performanceOptions: require('./webpack-performanceOptions'),
    useHashedModuleIds: require('./webpack-useHashedModuleIds'),
    useExternalScripts: require('./webpack-useExternalScripts'),
    copyFiles: require('./webpack-copyFiles'),
    svgSpriteLoader: require('./webpack-svgSpriteLoader')
};
