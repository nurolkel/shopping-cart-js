const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');


module.exports = { 
    mode: 'production',
    entry: {
        main: path.resolve(__dirname,'shoppingCart/app.js'),
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js',
        clean: true,
        assetModuleFilename: 'assets/[name][ext]'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset'
          
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },
              { 
                test: /\.json$/,
                exclude: /node_modules/,
                type: 'asset/source' //json
            }
        ]
    },
    optimization: {
        minimizer: [
            new ImageMinimizerPlugin({
                minimizer: {
                  implementation: ImageMinimizerPlugin.squooshMinify,
                  options: {
                    encodeOptions: {
                      mozjpeg: {
                        // That setting might be close to lossless, but it’s not guaranteed
                        // https://github.com/GoogleChromeLabs/squoosh/issues/85
                        quality: 100,
                      },
                      webp: {
                        lossless: 1,
                      },
                      avif: {
                        // https://github.com/GoogleChromeLabs/squoosh/blob/dev/codecs/avif/enc/README.md
                        cqLevel: 0,
                      },
                    },
                  },
                },
              }),
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Shopping Cart JS',
            filename: 'index.html',
            template: 'shoppingCart/index.html',
            chunks:['main']
        }),
        new ImageMinimizerPlugin({
            minimizerOptions: {
                // Lossless optimization with custom option
                // Feel free to experiment with options for better result for you
                plugins: [
                  ['gifsicle', {interlaced: true}],
                  ['jpegtran', {progressive: true}],
                  ['optipng', {optimizationLevel: 5}],
                  [
                    'svgo',
                    {
                      plugins: [
                        {
                          removeViewBox: false,
                        },
                      ],
                    },
                  ],
                ],
              },
        }),
      
    ],
}