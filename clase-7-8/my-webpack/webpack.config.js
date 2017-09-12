let webpack = require('webpack');
let path = require('path');

module.exports = {
    //archivo punto de entrada
    entry: path.resolve(__dirname, 'src/controller.js'),
    //salida del archivo y nombre
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'dist/bundle.js'
    },
    //modulos para transpilacion o conversion
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-1']
            }
        }]
    },
    //extensiones que reconoce para transpilar
    resolve: {
        extensions: ['.js', '.jsx']
    },
    //plugins para hacer hotreload
    // aca se puede configurar todo lo que sea necesario para salir a produccion
    //como minificado, lints, etc
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    // configuracion del servidor
    devServer: {
        contentBase: 'public/',
        historyApiFallback: true,
        inline: true,
        hot: true,
        port: 5000
    }
}