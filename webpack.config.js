const path = require('path'),
    webpack = require('webpack')

module.exports = {
    entry: {
        index: ['./src/index.tsx']
        // ,
        // vendor: ['react', 'react-dom']
    },
    output: {
        // path: path.resolve(__dirname, 'dist'),
        // filename: '[name].js'
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "umd",
        library: "RDemoPackageTest"
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}