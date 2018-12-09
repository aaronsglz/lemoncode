const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('./webpack.common.js');

module.exports = env => merge(common(env), {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerPort: 8989,
        }),
    ],
});