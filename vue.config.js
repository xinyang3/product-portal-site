const path = require('path')

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  filenameHashing: true,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'portal',
      chunks: ['manifest', 'chunk-vendors', 'chunk-common', 'index']
    }
  },
  lintOnSave: true,
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: false,
  configureWebpack: (config) => {
  },
  chainWebpack: (config) => {
    config.optimization
      .splitChunks({
        cacheGroups: {}
      });
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('src', path.resolve(__dirname, 'src'))
      .set('views', path.resolve(__dirname, 'src/views'))
      .set('public', path.resolve(__dirname, 'public'))
    // config.module
    //   .rule('eslint')
    //   .exclude
    //   .add('/Users/maybexia/Downloads/FE/community_built-in/src/lib')
    //   .end()

    config.optimization.minimize(true)
    config.optimization.splitChunks({
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    })
  },
  css: {
    requireModuleExtension: false,
    extract: true,
    sourceMap: false,
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },
      postcss: {
        // options here will be passed to postcss-loader
      }
    }
  },
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 3000,
    https: false,
    hotOnly: false,
    proxy: null,
    before: app => {
    }
  },
  parallel: require('os').cpus().length > 1,
  pwa: {},
  pluginOptions: {}
};