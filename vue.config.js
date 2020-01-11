module.exports = process.env.NODE_ENV === 'development' ? require('./build/config.dev.js') : require('./build/config.pro.js')
