// 打包组件入口
const components = require('../components.json')
const entrys = {}
Object.keys(components).forEach(item => {
  entrys[item] = components[item]
})

module.exports = {
  productionSourceMap: false,
  outputDir: 'lib',
  configureWebpack: {
    entry: entrys,
    output: {
      filename: '[name].js',
      libraryTarget: 'umd',
      library: 'nk-antv-lib',
    },
    devtool: '#source-map'
  },
  chainWebpack: config => {
    config.plugin('extract-css').init((Plugin, args) => 
      new Plugin({filename: 'theme/[name].css'}))
    config.optimization.delete('splitChunks')
    config.plugins.delete('copy')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugins.delete('html')
    config.plugins.delete('hmr')
    config.entryPoints.delete('app')
  }
}