const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    resolve: {
        modules: [__dirname, 'src', 'node_modules'],
        alias: {
            services: 'src/services',
            components: 'src/components',
            pages: 'src/pages',
            stores: 'src/stores',
            styles: 'src/styles',
            config: 'src/config'
        },
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve('babel-loader')
            },
            {
              test:/\.s?css|ass$/,
              use:['style-loader','css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                'file-loader'
                ]
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }
}