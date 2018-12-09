const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = env =>  merge(common(env), {
    mode: 'production',
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
});