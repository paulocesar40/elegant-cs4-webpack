const autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var path = require('path');
const precss = require('precss');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

const TransferWebpackPlugin = require('transfer-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    //devtool: 'cheap-module-source-map',
    entry: {
        app: [
            'tether',
            'font-awesome/scss/font-awesome.scss',
            './src/app.js'         
        ], 
        vendor: './src/vendor.js'
    },
    
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[hash].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader'
                }
                /*query: {
                    cacheDirectory: true,
                },*/
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader', // translates CSS into CommonJS modules
                        }, 
                        {
                            loader: 'postcss-loader', // Run post css actions
                            options: {
                                plugins: function () { // post css plugins, can be exported to postcss.config.js
                                    return [
                                        require('precss'),
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }, 
                        {
                            loader: 'sass-loader' // compiles Sass to CSS
                        }
                    ]
                })
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000&name=fonts/[name].[ext]',
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                exclude: [/images/],
                use: 'file-loader?name=fonts/[name].[ext]',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'images/',
                            publicPath: 'images/' 
                       } 
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                          bypassOnDebug: true,
                          mozjpeg: {
                            progressive: true,
                            quality: 65
                          },
                          // optipng.enabled: false will disable optipng
                          optipng: {
                            enabled: false,
                          },
                          pngquant: {
                            quality: '65-90',
                            speed: 4
                          },
                          gifsicle: {
                            interlaced: false,
                          },
                          // the webp option will enable WEBP
                          webp: {
                            quality: 75
                          }
                        }
                    }
                ]
            },
            // font-awesome
            {
                test: /font-awesome\.config\.js/,
                use: [
                { loader: 'style-loader' },
                { loader: 'font-awesome-loader' }
                ]
            },
            // Bootstrap 4
            {
                test: /bootstrap\/dist\/js\/umd\//, use: 'imports-loader?jQuery=jquery'
            }
        ]
    },
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, "dist"),
        compress: true,        
        stats: "errors-only",
        open: false
    },
    plugins: [

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            tether: 'tether',
            Tether: 'tether',
            'window.Tether': 'tether',
            Popper: ['popper.js', 'default'],
            'window.Tether': 'tether',
            Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
            Button: 'exports-loader?Button!bootstrap/js/dist/button',
            Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
            Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
            Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
            Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
            Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
            Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
            Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
            Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
            Util: 'exports-loader?Util!bootstrap/js/dist/util'
          }),
        new ExtractTextPlugin({
            filename: 'main.[hash].css'
        }),
        new TransferWebpackPlugin([
            { from: 'src/php' },
        ]),
        new HtmlWebpackPlugin({
            title: 'Elegant CS | Best Cleaning Service in Town',
            minify: {
                collapseWhitespace: false,
            },
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.NamedMudulesPlugin(),
        new BrowserSyncPlugin(
            {
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            //notify: true,
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:8080/',
            files: [{
                match: [
                    '**/*.html'
                ],
                fn: function(event, file) {
                    if (event === "change") {
                        const bs = require('browser-sync').get('bs-webpack-plugin');
                        bs.reload();
                    }
                }
            }]
            },
            {
               reload: true 
            }),
        new CleanWebpackPlugin(['dist'])
    ]
}