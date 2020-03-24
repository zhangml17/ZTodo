const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV === 'development'

let config = {
  target:'web',
  mode:'none',
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    filename:'bundle.js',
    path:path.join(__dirname, 'dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new VueLoaderPlugin(),
    new HTMLPlugin()
  ],
  module:{
    rules:[
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.(svg|jpg|jpeg|png|gif)$/,
        use: [
          {
            loader:'url-loader',
            options:{
              limit: 1024,
              name:'[name]-abc.[ext]'
            }
          }
        ]
      }
    ]
  }
}

if(isDev) {
  // 方便浏览器调试
  config.devtool = '#cheap-module-eval-source-map'

  config.devServer = {
    port: 8000,
    host: '0.0.0.0',
    overlay:{
      errors: true
    },
    // 热更新(不刷新页面，仅修改的内容更新)
    hot: true
  }
  // 热更新
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
}

module.exports = config