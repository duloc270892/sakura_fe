var path = require('path');
var webpack = require("webpack");
const OptimizeJsPlugin = require("optimize-js-plugin");
var pathConfig = {
    dev: path.resolve(__dirname, 'src/common/config/index.js'),
    qc: path.resolve(__dirname, 'src/common/config/index.qc.js'),
    prod: path.resolve(__dirname, 'src/common/config/index.prod.js'),
}
module.exports = {
    entry: {
        'bootstrap.min': './src/app/bootstrap',
        vendor: [
            'react',
            'react-dom',
            'react-redux-i18n',
            'redux',
            'react-redux',
            'react-router',
            'react-router-redux',
            'react-modal',
            'numeral',
            'axios',
            'moment-timezone',
            'decimal.js-light',
            'lodash',
            'keyboardjs',
            'immutable',
            'bugsnag-js'
        ]
    },
    output: {
        path: path.join(__dirname, '/public/js'), //path require file
        publicPath: '/public/',
        filename: '[name].js',
        chunkFilename: '[name]-[chunkhash].js'
    },
    module: {
        loaders: [{
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-decorators-legacy'],
                    presets: ['react', 'es2015']
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" }, {
                test: /\.(jpe?g|png|gif|svg|eot|svg|woff|woff2|ttf)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.resolve('./src'),
            'node_modules'
        ],
        alias: {
            Check$: path.resolve(__dirname, 'src/common/helpers/check.js'),
            Helper$: path.resolve(__dirname, 'src/common/helpers/index.js'),
            Config$: pathConfig[process.env.RUN_TYPE] || pathConfig[`dev`], 
            Routes$: path.resolve(__dirname, 'src/common/config/routes.js'),
            SportConfig$: path.resolve(__dirname, 'src/common/config/sport.js'),
            ScriptHOC$: path.resolve(__dirname, 'src/common/hoc/Script.js'),
            //component
            Dimmer$: path.resolve(__dirname, 'src/common/components/Dimmer.js'),
            ModalNoti$: path.resolve(__dirname, 'src/common/components/ModalNoti.js'),
            Loader$: path.resolve(__dirname, 'src/common/components/Loader.js'),
            Line: path.resolve(__dirname, 'src/common/components/Line.js'),
            BugsnagClient: path.resolve(__dirname, 'src/common/config/bugsnagClient.js'),
            AlertCustom$: path.resolve(__dirname, 'src/common/components/AlertCustom.js'),
            ButtonPermission$: path.resolve(__dirname, 'src/common/components/ButtonPermission.js'),
            LinkProduct$: path.resolve(__dirname, 'src/common/components/LinkProduct.js'),
            Combobox$: path.resolve(__dirname, 'src/common/components/Combobox.js'),
            ComboboxMultiple$: path.resolve(__dirname, 'src/common/components/ComboboxMultiple.js'),
            Cell$: path.resolve(__dirname, 'src/common/components/Cell.js'),
            PagingTable$: path.resolve(__dirname, 'src/common/components/PagingTable.js'),

            //end component
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),
        new OptimizeJsPlugin({
            sourceMap: false
        }),
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.min.js'}),
        new webpack.ProvidePlugin({
            //plugin
            'React': 'react',
            'ReactDOM': 'react-dom',
            'ReactReduxI18n': 'react-redux-i18n',
            'Redux': 'redux',
            'ReactRedux': 'react-redux',
            'ReactRouter': 'react-router',
            'ReactRouterRedux': 'react-router-redux',
            'ReactModal': 'react-modal',
            'Numeral': 'numeral',
            'axios': 'axios',
            'moment': 'moment-timezone',
            'Decimal': 'decimal.js-light',
            '_': 'lodash',
            'KeyboardJS': 'keyboardjs',
            'ScriptHOC': 'ScriptHOC',
            'Immutable': 'immutable',
            'Bugsnag': 'bugsnag-js',
            //end plugin
            //conf
            'Config': 'Config',
            'SportConfig': 'SportConfig',
            'Check': 'Check',
            'Helper': 'Helper',
            'Routes': 'Routes',
            'BugsnagClient': 'BugsnagClient',
            //end conf
            //component
            'Dimmer': 'Dimmer',
            'ModalNoti': 'ModalNoti',
            'Loader': 'Loader',
            'Line': 'Line',
            //end component,
            'AlertCustom': 'AlertCustom',
            'ButtonPermission': 'ButtonPermission',
            'LinkProduct':'LinkProduct',
            'Combobox': 'Combobox',
            'ComboboxMultiple': 'ComboboxMultiple',
            'Cell':'Cell',
            'Modal': 'react-modal',
            'PagingTable':'PagingTable'
        })
    ]
};
